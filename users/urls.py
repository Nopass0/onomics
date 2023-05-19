from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login_view'),
    path('profile/', views.profile, name='profile'),
    path('logout/', views.logout, name='logout'),
    path('api/v1/users.get', views.UserAPIView.as_view()),
]
