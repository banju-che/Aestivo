from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'category', 'stock', 'is_available', 'created_at')
    list_filter = ('category', 'created_at', 'is_available')
    search_fields = ('title', 'category', 'description')
    ordering = ('-created_at', )
