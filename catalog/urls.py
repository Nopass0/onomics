from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static

from .views import *
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('terms-of-use', views.termsOfUse, name='termsOfUse'),
    path('privicy', views.privicy, name='privicy'),
    path('vk', views.vk, name='vk'),
    path('admin-panel', views.admin_panel, name='admin-panel'),
    path('bookmarks/', views.bookmarks, name='bookmarks'),
    path('catalogue/', views.catalogue, name='catalogue'),
    path('comics/<int:id>/', views.comicsPage, name='comicsPage'),
    path('comics/add', views.addComicsPage, name='addComicsPage'),
    path('comics/edit/<int:id>', views.editComicsPage, name='editComicsPage'),
    path('comics/chapter/<int:id>', views.chapterPage, name='chapterPage'),
    path('comics/chapter/edit/<int:id>', views.chapterEditPage, name='chapterEditPage'),

    path('404/', views.error404, name='404'),
    path('api/v1/comics.get.all', ComicAPIView.as_view()),
    path('api/v1/comics.get/<int:id>', ComicsInfoAPIView.as_view()),
    path('api/v1/comics.put/<int:id>', ComicUpdateAPIView.as_view()),

    path('api/v1/chapters.post/<int:id>', ChapterAddAPIView.as_view()),
    path('api/v1/chapters_seqence_numbers.put/<int:id>', ChapterUpdateSeqenceNumberAPIView.as_view()),
    path('api/v1/chapter.delete/<int:id>', ChapterDeleteAPIView.as_view()),

    path('api/v1/tags.get', TagAPIView.as_view()),
    path('api/v1/genres.get', GenreAPIView.as_view()),

    path('api/v1/bookmarks.get', BookmarksAPIView.as_view()),
    path('api/v1/bookmarks.post', BookmarksAddAPIView.as_view()),
    path('api/v1/bookmarks.delete/<int:id>/', BookmarksDeleteAPIView.as_view()),
    path('api/v1/bookmarks.put/', BookmarksUpdateAPIView.as_view()),
    path("__reload__/", include("django_browser_reload.urls")),
]
