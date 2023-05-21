from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView

# Create your views here.
class SignUp(CreateView):
    form_class = UserCreationForm
    success_url = reverse_lazy("login")
    template_name = "register.html"

def profile(request):
    return render(request, 'profile.html')

def login(request):
    return redirect('login')