#API
import json
from .models import *
from .serializers import *
import os
from django.shortcuts import render
from django.shortcuts import redirect, render
from rest_framework import generics
from django.core.files.storage import FileSystemStorage
import random, string
from rest_framework.views import *
from django.http import JsonResponse, QueryDict
from django.templatetags.static import static
from django.middleware import csrf
from django.contrib.auth import authenticate, login as dj_login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core import serializers

#url: /api/users/
class UsersList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CheckIsAuth(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        return Response({'isAuth': True})
    
class GetMyUser(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        me = User.objects.filter(id=request.user.id)
        me_profile = Profile.objects.filter(user=request.user)
        data = json.loads(serializers.serialize("json", me))[0]['fields']
        data_profile = json.loads(serializers.serialize("json", me_profile))[0]['fields']
        return Response(dict(list(data.items()) + list(data_profile.items())))