import asyncio
import json
import os
from django.shortcuts import redirect, render
from rest_framework import generics
from django.core.files.storage import FileSystemStorage
import random, string
from rest_framework.views import *
from django.http import QueryDict

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
    chapters = Chapter.objects.filter(comic_id=id).order_by('id')
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
                                            'chapters': chapters, 
                                            'isCommentsExists': isCommentsExists,
                                            'comments': comments,
                                            'bookmark': bookmark,
                                            'isAuth': isAuth
                                            })

def catalogue(request):
    comics = Comic.objects.all()
    chapters = Chapter.objects.filter(comic_id=1).order_by('id')
    return render(request, 'catalog.html', {'comics': comics, 'chapters': chapters})

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
        chapters = Chapter.objects.filter(comic_id=id).order_by('sequence_number')
        return render(request, "comics_edit.html", {"comic": comic,
                                                    "chapters": chapters})
    else:
        return redirect("404")
    
#chapter page
def chapterPage(request, id):
    isAuth = False
    if request.user.is_authenticated:
        isAuth = True
    chapter = Chapter.objects.get(id=id)
    comic = Comic.objects.get(id=chapter.comic_id.id)
    if comic.author == request.user:
        return render(request, "chapter.html", {"chapter": chapter, "comic": comic, "isAuth": isAuth})
    else:
        return redirect("404")
    
#chapter edit page
def chapterEditPage(request, id):
    if not request.user.is_authenticated:
        return redirect('login')
    chapter = Chapter.objects.get(id=id)
    comic = Comic.objects.get(id=chapter.comic_id.id)
    if comic.author == request.user:
        return render(request, "chapter_edit.html", {"chapter": chapter, "comic": comic})
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

class ComicUpdateAPIView(APIView):
    def put(self, request, id):
        if request.user.is_authenticated:
            comic = Comic.objects.get(id=id)
            if comic.author != request.user:
                return Response({'error': 'Access denied'})
            #check is data valid
            serializer = ComicMiniSerializer(data=request.data)
            
            if serializer.is_valid():
                put = request.data
                if put.get('title') != '':
                    comic.title = put.get('title')

                if put.get('description') != '':
                    comic.description = put.get('description')

                if len(request.FILES) != 0:
                    if len(comic.image) > 0:
                        os.remove(comic.image.path)
                    comic.image = request.FILES['image']


                comic.save()
                return Response(serializer.data)
            else:
                print(serializer.errors)
                return Response({'error': 'Data is not valid'})
        else:
            return Response({'error': 'User is not authenticated'})

class ComicAPIView(generics.ListAPIView):
    queryset = Comic.objects.all()
    serializer_class = ComicSerializer

class GenreAPIView(generics.ListAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

class TagAPIView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class ChapterAPIView(generics.ListAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer

class ChapterAddAPIView(APIView):
    def post(self, request, id):
        if request.user.is_authenticated:
            serializer = ChapterSerializer(data=request.data)
            if serializer.is_valid():
                #get comic by id, check is it exist, check is user author of this comic, if yes then add chapter to comic(name)
                comic = Comic.objects.filter(id=id)
                if comic.exists():
                    if comic[0].author == request.user:
                        #get last sequence number of chapters and add 1 to it
                        last_chapter = Chapter.objects.filter(comic_id=comic[0]).order_by('-sequence_number')
                        if last_chapter.exists():
                            sequence = last_chapter[0].sequence_number + 1
                        else:
                            sequence = 1
                        chapter = Chapter.objects.create(comic_id=comic[0], name=request.data.get('name'), sequence_number=sequence)
                        chapter.save()
                        #get all data of chapter and return it
                        chapter = Chapter.objects.filter(id=chapter.id)
                        serializer = ChapterSerializer(chapter, many=True)
                        return Response(serializer.data)
                    else:
                        return Response({'error': 'Access denied'})
                else:
                    return Response({'error': 'Comic is not exist'})
            else:
                return Response({'error': 'Data is not valid'})
        else:
            return Response({'error': 'User is not authenticated'})
        
class ChapterUpdateSeqenceNumberAPIView(APIView):
    #get many chapters by comic id and update them, by chapter id in request.data object
    def put(self, request, id):
        if request.user.is_authenticated:
            comic = Comic.objects.filter(id=id)
            if comic.exists():
                if comic[0].author == request.user:
                    #get all chapters by comic id
                    chapters = Chapter.objects.filter(comic_id=comic[0])
                    if chapters.exists():
                        #check is data valid
                        serializer = ChapterSerializer(data=request.data, many=True)
                        if serializer.is_valid():
                            put = request.data
                            #print((list(put.dict().values())[0]))
                            #string = (list(put.dict().values())[0]) convert string to json
                            s = json.loads((list(put.dict().values())[0]))
                            #print(s["0"])
                            #get chapters id's, name's and sequence_number's from put dict and update chapters by id
                            for i in range(len(s)):
                                chapter = Chapter.objects.get(id=s[str(i)]["id"])
                                #check is chapter sequence_number field exist
                                if s[str(i)]["sequence_number"] != None:
                                    chapter.sequence_number = s[str(i)]["sequence_number"]
                                chapter.save()
                            #get all data of chapters and return it
                            chapters = Chapter.objects.filter(comic_id=comic[0])
                            serializer = ChapterSerializer(chapters, many=True)
                            return Response(serializer.data)
                        else:
                            return Response({'error': 'Data is not valid'})
                    else:
                        return Response({'error': 'Chapters is not exist'})
                else:
                    return Response({'error': 'Access denied'})
            else:
                return Response({'error': 'Comic is not exist'})
        else:
            return Response({'error': 'User is not authenticated'})
        
class ChapterDeleteAPIView(APIView):
    #delete chapter by id
    def delete(self, request, id):
        if request.user.is_authenticated:
            chapter = Chapter.objects.filter(id=id)
            if chapter.exists():
                #get comic by chapter id and check is user author of this comic
                author = Comic.objects.filter(id=chapter[0].comic_id.id)[0].author
                if author == request.user:
                    chapter[0].delete()
                    return Response({'success': 'Chapter deleted'})
                else:
                    return Response({'error': 'Access denied'})
            else:
                return Response({'error': 'Chapter is not exist'})
        else:
            return Response({'error': 'User is not authenticated'})