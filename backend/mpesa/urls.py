from django.urls import path
from . import views

urlpatterns = [
    path('token/', views.get_access_token),
    path('stkpush/', views.lipa_na_mpesa_online),
    path('callback/', views.mpesa_callback),
]
