#API
from .models import *
from .serializers import *
from rest_framework import generics

class TagListCreate(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class ComicsListCreate(generics.ListCreateAPIView):
    queryset = Comic.objects.all()
    serializer_class = ComicSerializer