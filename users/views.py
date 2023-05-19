from django.shortcuts import render, redirect
from .forms import LoginForm
from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.decorators import login_required

from rest_framework import generics
from .serializers import UserSerializer
from .models import User

def logout(request):
    logout(request)
    return redirect('catalogue')

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('catalogue')
            else:
                # Display an error message
                pass
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})

def register(request):
    return render(request, 'register.html')

@login_required
def profile(request):
    return render(request, 'profile.html')

class UserAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer