from django.urls import path
from . import views

urlpatterns = [
    path('api/users/', views.UsersList.as_view() ),
    # path('api/isauth/', views.CheckIsAuth.as_view() )
    path('api/profile/', views.GetMyUser.as_view() )
    
]