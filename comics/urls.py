from django.urls import path
from . import views

urlpatterns = [
    path('api/tags/', views.TagListCreate.as_view() ),
    path('api/comics/', views.ComicsListCreate.as_view() ),
]