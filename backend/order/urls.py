from django.urls import path
from .views import OrderListCreateView, OrderRetrieveUpdateDestroyApiView

urlpatterns = [
    path ('', OrderListCreateView.as_view(), name='order-list-create'),
    path ('<int:pk>/', OrderRetrieveUpdateDestroyApiView.as_view(), name='order-details')
]