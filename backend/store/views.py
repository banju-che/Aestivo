from django.shortcuts import render
from rest_framework import generics, permissions, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product
from .serializers import ProductSerializer
from rest_framework.pagination import PageNumberPagination


# ✅ Pagination class
class ProductPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = 'page_size'
    max_page_size = 50


# ✅ Product List + Create View
class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all().order_by('-created_at')
    serializer_class = ProductSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = ProductPagination

    # --- Filters ---
    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    filterset_fields = ['category', 'is_available', 'price']
    search_fields = ['title']
    ordering_fields = ['price', 'created_at']
    ordering = ['-created_at']


# ✅ Single Product View
class ProductRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


# ✅ Category List View
class CategoryListView(APIView):
    def get(self, request):
        categories = [choice[0] for choice in Product.CATEGORY_CHOICES]
        return Response(categories)
