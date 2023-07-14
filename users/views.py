#API
from .models import *
from .serializers import *
from rest_framework import generics

class UsersListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer