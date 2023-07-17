#API
from .models import *
from .serializers import *
import os
from django.shortcuts import render
from django.shortcuts import redirect, render
from rest_framework import generics
from django.core.files.storage import FileSystemStorage
import random, string
from rest_framework.views import *
from django.http import QueryDict
from django.templatetags.static import static
from django.middleware import csrf
from django.contrib.auth import authenticate, login as dj_login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

#url: /api/users/
class UsersList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

#url: /api/users/auth/
class UserAuth(APIView):
    def post(self, request, format=None):
        if request.user.is_authenticated:
            return Response({'error': 'User already logged in'}, status=status.HTTP_400_BAD_REQUEST)
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            dj_login(request, user)
            return Response({'success': 'User logged in'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Wrong credentials'}, status=status.HTTP_400_BAD_REQUEST)

        
#url: /api/users/logout/
class UserLogout(APIView):
    def get(self, request, format=None):
        if request.user.is_authenticated:
            logout(request)
            return Response({'success': 'User logged out'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'User not logged in'}, status=status.HTTP_400_BAD_REQUEST)
        
