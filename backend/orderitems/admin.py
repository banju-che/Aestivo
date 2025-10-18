from django.contrib import admin
from .models import OrderItem

@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'product', 'quantity', 'price', 'subtotal_display')

    def subtotal_display(self, obj):
        return obj.subtotal
    subtotal_display.short_description = 'Subtotal'
