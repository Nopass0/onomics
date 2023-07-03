from base64 import urlsafe_b64decode
from django.conf import settings
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from django.contrib.auth import authenticate, login as dj_login, logout
from django.core.mail import EmailMessage
from rest_framework.views import *
from rest_framework import generics

from catalog.models import *

def reader(request, comic_id, sq_number_if_chapter):
    isAuth = False
    if request.user.is_authenticated:
        isAuth = True
    comic = Comic.objects.get(id=comic_id)
    chapter = Chapter.objects.get(comic=comic, sequence_number=sq_number_if_chapter)

    if isAuth:
        chapter.views.get_or_create(user=request.user)

    blocks = Block.objects.filter(chapter=chapter)
    if chapter.isPrivate == False:
        return render(request, "reader/reader.html", {"chapter": chapter,
                                                      "comic": comic,
                                                      "isAuth": isAuth,
                                                      "blocks": blocks})
    else:
        return redirect("404")