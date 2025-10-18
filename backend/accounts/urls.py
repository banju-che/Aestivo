from django.urls import path
from .views import AccountsListCreateView, UserDetailView

urlpatterns = [
    path('', AccountsListCreateView.as_view(), name='user-list'),
    path('me/', UserDetailView.as_view(), name='user-detail'),
]