from django.urls import path, re_path
from . import views


urlpatterns = [
    path('', views.index ),

    # API
    path('api/is_user_logged_in', views.IsUserLoggedInView.as_view()),
    path('api/csrf_token', views.CsrfTokenView.as_view()),
    path('api/staticfiles/<str:fileName>', views.StaticFilesView.as_view()),

    re_path('.*/', views.index, name='index'),
]