from django.urls import path
from . import views

urlpatterns = [
    path('api/users/', views.UsersList.as_view() ),
    path('api/user/auth/', views.UserAuth.as_view() ),
    path('api/user/logout/', views.UserLogout.as_view() ),
    
]