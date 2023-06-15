from django import views
from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path("signup/", signup, name="signup"),
    #path('accounts/', include('django.contrib.auth.urls')),
    path("profile/", profile, name="profile"),
    path("login/", login, name="login_view"),
    path("logout/", logoutUser, name="logout"),
    path("user/", user_profile, name="user_profile"),
    path("email_confirm/", confirm_email, name="confirm_email"),
    path("users/", users_list, name="users_list"),

    path("template/", template_view, name="template_view"),

]
