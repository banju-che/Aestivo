from django.urls import path
from .views import OrderItemListCreateView, OrderItemRetrieveUpdateDestroyApiView

urlpatterns = [
    path ('', OrderItemListCreateView.as_view(), name='order-list-create'),
    path ('<int:pk>/', OrderItemRetrieveUpdateDestroyApiView.as_view(), name='order-details')
]