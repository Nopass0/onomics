import asyncio
from django.shortcuts import redirect, render
from rest_framework import generics
from django.core.files.storage import FileSystemStorage
import random, string
from rest_framework.views import *

from .serializers import *
from .models import *
from .forms import *

# Create your views here.

def randomword(length):
   letters = string.ascii_lowercase
   return ''.join(random.choice(letters) for i in range(length))


def index(request):
    comics = Comic.objects.all()
    if len(Comic.objects.all()) > 0:
        isComicsExists = True
    else:
        isComicsExists = False
    return render(request, 'index.html' , {'comics': comics, 'isComicsExists': isComicsExists})

def bookmarks(request):
    return render(request, 'bookmarks.html')

def vk(request):
    return redirect('https://vk.com/onomics')

def admin_panel(request):
    return redirect('/admin')

def comicsPage(request, id):
    isAuth = False
    if request.user.is_authenticated:
        isAuth = True

    if len(Comic.objects.all()) == 0:
        return redirect('index')
    formComment = addCommentForm(auto_id=False)
    comics = Comic.objects.filter(id=id)[0]
    if request.method == "POST" and isAuth:
        formComment = addCommentForm(request.POST, auto_id=False)
        if formComment.is_valid():
            text = formComment.cleaned_data.get('comment_input')
            if len(text) > 0:
                #Получение автора комментария и добавление комментария в БД, а также добавление комментария в список комментариев комикса
                #Create new comment
                comment = Comment.objects.create(text=text, author=request.user)
                comment.save()
                comics.comments.add(comment)
                comics.save()

                return redirect('comicsPage', id=id)
            
    else:
        formComment = addCommentForm(auto_id=False)

    #Проверка на наличие комментариев
    isCommentsExists = False
    comices = Comic.objects.exclude(id=id).order_by('id')
    genres = comics.genres.all()
    charapters = Charapter.objects.filter(comic_id=id).order_by('id')
    comments = comics.comments.all()
    #get bookmark for current user and comic and set 'read' if it comic exist in read list of user, also with other bookmarks
    bookmark = 'del'
    if isAuth:
        bookmarks = Bookmark.objects.filter(user=request.user)[0]
        if comics in bookmarks.read.all():
            bookmark = 'read'
        elif comics in bookmarks.readed.all():
            bookmark = 'readed'
        elif comics in bookmarks.droped.all():
            bookmark = 'droped'
        elif comics in bookmarks.will_read.all():
            bookmark = 'will_read'

    if len(comments) > 0:
        isCommentsExists = True
    return render(request, 'comics.html', { 'formComment': formComment,
                                            'comic': comics,
                                            'comices': comices,
                                            'genres': genres, 
                                            'charapters': charapters, 
                                            'isCommentsExists': isCommentsExists,
                                            'comments': comments,
                                            'bookmark': bookmark,
                                            'isAuth': isAuth
                                            })

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

def addComicsPage(request):
    if not request.user.is_authenticated:
        return redirect('login')
    form = addComicsForm()
    message = ""
    if request.method == "POST":
        form = addComicsForm(request.POST, request.FILES)
        if form.is_valid():
            comics = form.save(commit=False)
            comics.author = request.user
            comics.save()
            
            return redirect(comics)
        else:
            message = "Данные заполнены неверно!"
            

    return render(request, 'addComicsPage.html', {'form': form, 'message': message})

def editComicsPage(request, id):
    if not request.user.is_authenticated:
        return redirect('login')
    comic = Comic.objects.get(id=id)
    if comic.author == request.user:
        return render(request, "comics_edit.html", {"comic": comic})
    else:
        return redirect("404")
#API

#bookmarks API (GET) with check is user authenticated
class BookmarksAPIView(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            bookmarks = Bookmark.objects.filter(user=request.user)
            serializer = BookmarkSerializer(bookmarks, many=True)
            return Response(serializer.data)
        else:
            return Response({'error': 'User is not authenticated'})

#bookmarks API (POST) with check is user authenticated
class BookmarksAddAPIView(APIView):
    def post(self, request):
        if request.user.is_authenticated:
            serializer = BookmarkSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save(user=request.user)
                return Response(serializer.data)
            else:
                return Response({'error': 'Data is not valid'})
        else:
            return Response({'error': 'User is not authenticated'})
        
#bookmarks API (DELETE) with check is user authenticated
class BookmarksDeleteAPIView(APIView):
    def delete(self, request, id):
        if request.user.is_authenticated:
            bookmark = Bookmark.objects.filter(id=id)
            bookmark.delete()
            return Response({'success': 'Bookmark was deleted'})
        else:
            return Response({'error': 'User is not authenticated'})

#update Bookmark API (PUT) with check is user authenticated
class BookmarksUpdateAPIView(APIView):
    def put(self, request):
        if request.user.is_authenticated:
            bookmark = Bookmark.objects.filter(user=request.user)[0]
            #check is data valid
            serializer = BookmarkSerializer(data=request.data)
            if serializer.is_valid():
                #print('valid')
                #get all read, will_read, readed, droped comics from bookmark and add to it read, will_read, readed, droped comics from request if they are not in bookmark and exist
                if request.data.get('read[]') != None:
                    for read in request.data.get('read[]'):
                        if read not in bookmark.read.all() and Comic.objects.filter(id=read).exists():
                            bookmark.read.add(read)
                            #delete comics from will_read, readed, droped if it is in them
                            bookmark.will_read.remove(read)
                            bookmark.readed.remove(read)
                            bookmark.droped.remove(read)

                if request.data.get('will_read[]') != None:
                    for will_read in request.data.get('will_read[]'):
                        if will_read not in bookmark.will_read.all() and Comic.objects.filter(id=will_read).exists():
                            bookmark.will_read.add(will_read)
                            #delete comics from read, readed, droped if it is in them
                            bookmark.read.remove(will_read)
                            bookmark.readed.remove(will_read)
                            bookmark.droped.remove(will_read)

                if request.data.get('readed[]') != None:
                    for readed in request.data.get('readed[]'):
                        if readed not in bookmark.readed.all() and Comic.objects.filter(id=readed).exists():
                            bookmark.readed.add(readed)
                            #delete comics from read, will_read, droped if it is in them
                            bookmark.read.remove(readed)
                            bookmark.will_read.remove(readed)
                            bookmark.droped.remove(readed)

                if request.data.get('droped[]') != None:
                    for droped in request.data.get('droped[]'):
                        if droped not in bookmark.droped.all() and Comic.objects.filter(id=droped).exists():
                            bookmark.droped.add(droped)
                            #delete comics from read, will_read, readed if it is in them
                            bookmark.read.remove(droped)
                            bookmark.will_read.remove(droped)
                            bookmark.readed.remove(droped)

                #delete writes with comics id from bookmark if they are not in request. Example if request has readed[] then delete all comics with id from read[], droped[], will_read[] from bookmark

                bookmark.save()
            
                return Response(serializer.data)
            else:
                return Response({'error': 'Data is not valid'})
        else:
            return Response({'error': 'User is not authenticated'})

#comics API (GET) by id info
class ComicsInfoAPIView(APIView):
    def get(self, request, id):
        comics = Comic.objects.filter(id=id)
        serializer = ComicSerializer(comics, many=True)
        return Response(serializer.data)

class ComicAPIView(generics.ListAPIView):
    queryset = Comic.objects.all()
    serializer_class = ComicSerializer

class GenreAPIView(generics.ListAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

class TagAPIView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer