from django.db import models

class MpesaTransaction(models.Model):
    merchant_request_id = models.CharField(max_length=255)
    checkout_request_id = models.CharField(max_length=255)
    result_code = models.IntegerField()
    result_desc = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    mpesa_receipt_number = models.CharField(max_length=255, null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    transaction_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.phone_number} - {self.amount} ({self.result_desc})"
