from django.urls import path, re_path
from . import views


urlpatterns = [
    path('', views.index ),

    # API
    path('api/staticfiles/<str:fileName>', views.StaticFilesView.as_view()),

    re_path('.*/', views.index, name='index'),
]