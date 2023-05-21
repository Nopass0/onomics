from django import views
from django.contrib import admin
from django.urls import path, include
from .views import SignUp, login, profile

urlpatterns = [
    path("signup/", SignUp.as_view(), name="signup"),
    path('accounts/', include('django.contrib.auth.urls')),
    path("profile/", profile, name="profile"),
    path("login/", login, name="login_view"),
]
