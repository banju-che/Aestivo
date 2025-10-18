from django.db import models

class Product(models.Model):

    CATEGORY_CHOICES = [
        ('Decor', 'Decor'),
        ('Furniture', 'Furniture'),
        ('Lighting', 'Lighting'),
        ('Art', 'Art'),
        ('Sofa', 'Sofa'),
        ('office-chairs', 'office-chairs'),
        ('Outdoor', 'Outdoor'),
    ]

    title = models.CharField(max_length=200) 
    description = models.TextField() 
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES) 
    price = models.DecimalField(max_digits=10, decimal_places=2)  
    stock = models.PositiveIntegerField(default=0) 
    image = models.URLField(max_length=500, blank=True, null=True)
    is_available = models.BooleanField(default=True)  
    created_at = models.DateTimeField(auto_now_add=True)  
    updated_at = models.DateTimeField(auto_now=True)  

    def __str__(self):
        return self.title