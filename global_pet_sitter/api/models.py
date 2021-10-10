from django.db import models
from django.contrib.auth.models import AbstractUser
class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = models.CharField(max_length=255, unique=True)

    # USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Owner(models.Model):
    pass

class Sitter(models.Model):
    pass

class Pet(models.Model):
    owner = models.ForeignKey(Owner, on_delete=models.CASCADE)
    species = models.CharField(max_length=255, default='')
    breed = models.CharField(max_length=255, default='')
    name = models.CharField(max_length=255, default='')
