from django.contrib import admin
from django.urls import include, path

from .views import ComicAPIView, GenreAPIView, TagAPIView
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('terms-of-use', views.termsOfUse, name='termsOfUse'),
    path('privicy', views.privicy, name='privicy'),
    path('vk', views.vk, name='vk'),
    path('bookmarks/', views.bookmarks, name='bookmarks'),
    path('catalogue/', views.catalogue, name='catalogue'),
    path('comics/<int:id>', views.comicsPage, name='comicsPage'),
    path('404/', views.error404, name='404'),
    path('api/v1/comics.get', ComicAPIView.as_view()),
    path('api/v1/tags.get', TagAPIView.as_view()),
    path('api/v1/genres.get', GenreAPIView.as_view()),
    path("__reload__/", include("django_browser_reload.urls")),
]
