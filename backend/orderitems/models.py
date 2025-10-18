from django.db import models

class OrderItem(models.Model):
    order = models.ForeignKey('order.Order', on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey('store.Product', on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity} × {self.product.title}"

    @property
    def subtotal(self):
        return self.quantity * self.price
