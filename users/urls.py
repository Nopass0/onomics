from django import views
from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path("signup/", signup, name="signup"),
    path('accounts/', include('django.contrib.auth.urls')),
    path("profile/", profile, name="profile"),
    path("login/", login, name="login_view"),

]
