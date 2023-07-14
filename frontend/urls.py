from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ),
    path('api/staticfiles/<str:fileName>', views.StaticFilesView.as_view()),
]