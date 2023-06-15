from base64 import urlsafe_b64decode
from django.conf import settings
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
#from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView
from django.contrib.auth import authenticate, login as dj_login, logout
from django.core.mail import EmailMessage

from .forms import *
from .email_code_generator import *
from .models import *

# Create your views here.
'''
class SignUp(CreateView):
    form_class = EmailUserCreationForm #UserCreationForm
    success_url = reverse_lazy("login")
    template_name = "register.html"
'''

def sendEmailActivationCode(user):
    email = EmailMessage(
    'Код подтверждения почты',
    profile.email_code,
    'from@example.com',
    [user.email],
    ['bcc@example.com'],
    )
    email.send()


def signup(request):
    if request.user.is_authenticated:
        return redirect('profile')
    
    form = SignUpForm()
    profile_form = SignUpProfile()

    if request.method == "POST":
        form = SignUpForm(request.POST)
        profile_form = SignUpProfile(request.POST)
        if form.is_valid() and profile_form.is_valid():
            user = form.save()

            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')

            profile = Profile.objects.get(user=user)
            profile.bdate = profile_form.cleaned_data.get('bdate')
            profile.gender = profile_form.cleaned_data.get('gender')
            profile.email_code = generate_email_code(4)
            profile.save()

            if settings.DEBUG == False:
                sendEmailActivationCode(user)

            user = authenticate(username=username, password=password)

            if (user is not None):
                dj_login(request, user)
                return redirect('confirm_email')
            else:
                form = SignUpForm()
                profile_form = SignUpProfile()

    return render(request, 'register.html', {'form': form, 'profile_form': profile_form})

def profile(request):
    if not request.user.is_authenticated:
        return redirect('index')
    isMyProfile = True
    return render(request, 'profile.html', {'isMyProfile': isMyProfile})

def user_profile(request):
    user_id = request.GET["id"]
    isMyProfile = False
    if user_id == "0":
        return redirect('profile')
    else:
        user = User.objects.get(id=user_id)
        return render(request, 'profile.html', {'user_page': user, 'isMyProfile': isMyProfile})
    
def confirm_email(request):
    message = ""
    if not request.user.is_authenticated:
        return redirect('login')
    profile = Profile.objects.get(user=request.user)
    if profile.email_confirmed == True:
        return redirect('profile')
    if settings.DEBUG == True:
        message = "Debug code: " + profile.email_code
    form = ConfirmEmail()
    if request.method == "POST":
        code = request.POST["code"]
        if code == profile.email_code:
            print("OK")
            profile.email_confirmed = True
            profile.save()
            return redirect('profile')
        else:
            message = "Неверный код"
            form = ConfirmEmail()
            return render(request, "confirm_email.html", {'form': form, 'message': message})
    return render(request, "confirm_email.html", {'form': form, 'message': message})

def template_view(request):
    if settings.DEBUG == False:
        return redirect('index')
    return render(request, request.GET["t"])

def users_list(request):
    users = User.objects.all()
    return render(request, 'users-list.html', {'users': users})

def login(request):
    if request.user.is_authenticated:
          return redirect('profile')
    form = LoginUserForm()
    #print(form)
    if request.method == "POST":
        form = LoginUserForm(request.POST)
        if (form.is_valid()):
            print(request)
            print(form.is_valid())
            username = request.POST["username"]
            password = request.POST["password"]
            user = authenticate(request, username=username, password=password)
            print(user)
            if user is not None:
                print("OK")
                dj_login(request, user)
                return redirect('profile')
            else:
                form = LoginUserForm()
    return render(request, 'registration/login.html', {'form': form})

def logoutUser(request):
    logout(request)
    return redirect('index')