from django.shortcuts import redirect, render
from rest_framework import generics

from .serializers import ComicSerializer, GenreSerializer, TagSerializer
from .models import Comic, Genre, Tag, Comment, Charapter, Block

# Create your views here.


def index(request):
    comics = Comic.objects.all()
    return render(request, 'index.html' , {'comics': comics})

def bookmarks(request):
    return render(request, 'bookmarks.html')

def vk(request):
    return redirect('https://vk.com/onomics')

def comicsPage(request, id):
    comics = Comic.objects.filter(id=id)[0]
    comices = Comic.objects.exclude(id=id).order_by('id')
    genres = comics.genres.all()
    charapters = Charapter.objects.filter(comic_id=id).order_by('id')
    return render(request, 'comics.html', {'comic': comics, 'comices': comices, 'genres': genres, 'charapters': charapters})

def catalogue(request):
    comics = Comic.objects.all()
    charapters = Charapter.objects.filter(comic_id=1).order_by('id')
    return render(request, 'catalog.html', {'comics': comics, 'charapters': charapters})

def error404(request):
    return render(request, '404.html')

def termsOfUse(request):
    return render(request, 'terms-of-use.html')

def privicy(request):
    return render(request, 'privicy.html')
#API

class ComicAPIView(generics.ListAPIView):
    queryset = Comic.objects.all()
    serializer_class = ComicSerializer

class GenreAPIView(generics.ListAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

class TagAPIView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer