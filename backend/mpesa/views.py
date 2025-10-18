import requests
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.conf import settings
from requests.auth import HTTPBasicAuth
import base64
from datetime import datetime

@api_view(['GET'])
def get_access_token(request):
    url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    res = requests.get(url, auth=HTTPBasicAuth(settings.MPESA_CONSUMER_KEY, settings.MPESA_CONSUMER_SECRET))
    data = res.json()
    return Response(data)


@api_view(['POST'])
def lipa_na_mpesa_online(request):
    phone = request.data.get("phone")
    amount = request.data.get("amount")

    # 1. Generate access token
    token_url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    r = requests.get(token_url, auth=HTTPBasicAuth(settings.MPESA_CONSUMER_KEY, settings.MPESA_CONSUMER_SECRET))
    access_token = r.json().get("access_token")

    # 2. Generate password
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    data_to_encode = settings.MPESA_SHORTCODE + settings.MPESA_PASSKEY + timestamp
    password = base64.b64encode(data_to_encode.encode()).decode("utf-8")

    # 3. Prepare STK Push request
    stk_url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    headers = {"Authorization": f"Bearer {access_token}"}
    payload = {
        "BusinessShortCode": settings.MPESA_SHORTCODE,
        "Password": password,
        "Timestamp": timestamp,
        "TransactionType": "CustomerPayBillOnline",
        "Amount": amount,
        "PartyA": phone,
        "PartyB": settings.MPESA_SHORTCODE,
        "PhoneNumber": phone,
        "CallBackURL": settings.MPESA_CALLBACK_URL,
        "AccountReference": "Aestivo Payments",
        "TransactionDesc": "Payment for order",
    }

    response = requests.post(stk_url, json=payload, headers=headers)
    return Response(response.json())

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import MpesaTransaction

@api_view(['POST'])
def mpesa_callback(request):
    print("📩 Callback received:", request.data)

    # The callback data structure looks like:
    # {
    #   "Body": {
    #     "stkCallback": {
    #       "MerchantRequestID": "...",
    #       "CheckoutRequestID": "...",
    #       "ResultCode": 0,
    #       "ResultDesc": "The service request is processed successfully.",
    #       "CallbackMetadata": {
    #         "Item": [
    #           {"Name": "Amount", "Value": 1.00},
    #           {"Name": "MpesaReceiptNumber", "Value": "NLJ7RT61SV"},
    #           {"Name": "Balance"},
    #           {"Name": "TransactionDate", "Value": 20251017143012},
    #           {"Name": "PhoneNumber", "Value": 254708374149}
    #         ]
    #       }
    #     }
    #   }
    # }

    try:
        body = request.data.get("Body", {}).get("stkCallback", {})
        merchant_request_id = body.get("MerchantRequestID")
        checkout_request_id = body.get("CheckoutRequestID")
        result_code = body.get("ResultCode")
        result_desc = body.get("ResultDesc")

        # Extract the metadata items safely
        metadata = body.get("CallbackMetadata", {}).get("Item", [])
        amount = receipt = phone = None

        for item in metadata:
            name = item.get("Name")
            if name == "Amount":
                amount = item.get("Value")
            elif name == "MpesaReceiptNumber":
                receipt = item.get("Value")
            elif name == "PhoneNumber":
                phone = item.get("Value")

        # Save transaction to DB
        MpesaTransaction.objects.create(
            merchant_request_id=merchant_request_id,
            checkout_request_id=checkout_request_id,
            result_code=result_code,
            result_desc=result_desc,
            amount=amount,
            mpesa_receipt_number=receipt,
            phone_number=phone,
        )

        print("✅ Transaction saved successfully")

    except Exception as e:
        print("❌ Error saving transaction:", e)

    # Always send an acknowledgment back to M-Pesa
    return Response({"ResultCode": 0, "ResultDesc": "Accepted"})

