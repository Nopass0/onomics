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

    #API
    #get all users
    path("api/v1/users.get/", UserList.as_view()),
    #get user by id
    path("api/v1/users.get/<int:pk>/", UserDetail.as_view()),
    #update all information about user
    path("api/v1/user.update", UserUpdate.as_view(), name="user.update"),

    path('api/v1/follow.post', FollowOnUser.as_view()),
    #set online API
    
    #get is user online

    #set base user info (first_name, last_name, description, avatar and nickname)

    #get base user info (first_name, last_name, description, avatar and nickname)

    #get user background

    #set user background (if permission 'isPremium' is true) 
]
