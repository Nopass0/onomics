import os
from django.shortcuts import render
from django.shortcuts import redirect, render
from rest_framework import generics
from django.core.files.storage import FileSystemStorage
import random, string
from rest_framework.views import *
from django.http import QueryDict
from django.templatetags.static import static

def index(request):
    return render(request, 'frontend/index.html')

#API

#get all static files
class StaticFilesView(APIView):
    def get(self, request, fileName):
        #replace '&' in fileName with '/'
        fileName = fileName.replace('&', '/')
        #get the static file url using static
        staticFileUrl = static(fileName)
        print(staticFileUrl)
        #return the url
        return Response({'url': staticFileUrl})