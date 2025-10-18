from django.contrib import admin
from .models import Order

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'created_at', 'status', 'total_price')
    list_filter = ('created_at', 'status', 'user')
    search_fields = ('user__username', 'status')
    ordering = ('-created_at', )
