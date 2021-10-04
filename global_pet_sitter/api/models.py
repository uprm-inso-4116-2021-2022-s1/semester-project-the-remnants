from django.db import models
from django.contrib.auth.models import AbstractUser
class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Owner(models.Model):
    pass

class Sitter(models.Model):
    pass

class Pet(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
