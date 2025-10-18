import os
import django
import random
from decimal import Decimal
from datetime import timedelta, datetime
from django.utils import timezone

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'aestivo.settings')
django.setup()

from accounts.models import CustomUser
from store.models import Product
from order.models import Order
from orderitems.models import OrderItem


def seed_orders():
    print("🧹 Clearing old data...")
    OrderItem.objects.all().delete()
    Order.objects.all().delete()
    CustomUser.objects.filter(is_superuser=False).delete()

    print("👥 Creating sample users...")
    users = []
    for i in range(1, 6):
        user = CustomUser.objects.create_user(
            username=f'user{i}',
            email=f'user{i}@aestivo.com',
            password='password123',
            phone=f'+2547{random.randint(10000000,99999999)}'
        )
        users.append(user)

    print(f"✅ Created {len(users)} users")

    products = list(Product.objects.all())
    if not products:
        print("❌ No products found! Please add products first.")
        return

    print("🛒 Creating sample orders and order items...")
    statuses = ['Pending', 'Processing', 'Shipped', 'Delivered']

    for i in range(50):  # 10 orders × 5 users
        user = random.choice(users)
        status = random.choice(statuses)
        order = Order.objects.create(
            user=user,
            status=status,
            total_price=0
        )

        total = Decimal('0.00')
        num_items = random.randint(1, 5)
        selected_products = random.sample(products, min(num_items, len(products)))

        for product in selected_products:
            quantity = random.randint(1, 3)
            item_price = product.price
            subtotal = item_price * quantity

            OrderItem.objects.create(
                order=order,
                product=product,
                quantity=quantity,
                price=item_price
            )
            total += subtotal

        order.total_price = total

        # Random realistic date in the last 3 months
        days_ago = random.randint(0, 90)
        created_at = timezone.now() - timedelta(days=days_ago, hours=random.randint(0, 23))
        order.created_at = created_at
        order.updated_at = created_at + timedelta(days=random.randint(0, 5))
        order.save()

    print("✅ Done seeding 50 sample orders with order items!")


if __name__ == '__main__':
    seed_orders()
