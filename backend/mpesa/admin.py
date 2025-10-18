from django.contrib import admin
from .models import MpesaTransaction

@admin.register(MpesaTransaction)
class MpesaTransactionAdmin(admin.ModelAdmin):
    list_display = ('id', 'phone_number', 'amount', 'mpesa_receipt_number', 'result_desc', 'transaction_date')
    search_fields = ('phone_number', 'mpesa_receipt_number')
    list_filter = ('result_code', 'transaction_date')
    ordering = ('-transaction_date',)
