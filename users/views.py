from base64 import urlsafe_b64decode
from django.conf import settings
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
#from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView
from django.contrib.auth import authenticate, login as dj_login, logout
from django.core.mail import EmailMessage, send_mail
from rest_framework.views import *
from rest_framework import generics

from .serializers import *
from .forms import *
from .email_code_generator import *
from .models import *

#send email with activation code
def sendEmailActivationCode(user):
    profile = Profile.objects.get(user=user)
    email = EmailMessage(
        'Onomics: Активация аккаунта',
        'Ваш код активации: ' + profile.email_code,
        to=[user.email]
    )
    email.send()
    

def isFollower(user_from, user_to):
    try:
        follow = Follow.objects.filter(user_from=user_from, user_to=user_to)
    except Follow.DoesNotExist:
        follow = None
    if not follow.exists():
        return False
    return True

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
        return redirect('login_view')
    isMyProfile = True
    #My comics
    comics = Comic.objects.filter(author=request.user)[:10]
    followers = Follow.objects.filter(user_to=request.user).all()
    follows = Follow.objects.filter(user_from=request.user).all()
    chapterViews = View.objects.filter(user=request.user).all()
    print(chapterViews)
    #get id's followers and get all users with this id's
    
    followers_users = []
    for follower in followers:
        #limit on 10 followers
        if len(followers_users) > 10:
            break
        followers_users.append(User.objects.get(id=follower.user_from.id))
    
    
    return render(request, 'profile.html', {'isMyProfile': isMyProfile,
                                            'user_page': request.user,
                                            'comics': comics,
                                            'followers': followers_users,
                                            'follows': follows,
                                            'chapterViews': chapterViews})

def user_profile(request):
    user_id = request.GET["id"]
    isMyProfile = False
    followers = []
    if user_id == "0":
        return redirect('profile')
    else:
        user = User.objects.get(id=user_id)
        comics = Comic.objects.filter(author=user)[:10]
        followers = Follow.objects.filter(user_to=user).all()

        isUserFollower = not Follow.objects.filter(user_from=request.user, user_to=user_id).exists()

        follows = Follow.objects.filter(user_from=user).all()
        chapterViews = View.objects.filter(user=user).all()

        followers_users = []
        for follower in followers:
            #limit on 10 followers
            if len(followers_users) > 10:
                break
            followers_users.append(User.objects.get(id=follower.user_from.id))
        return render(request, 'profile.html', {'user_page': user, 
                                                'isMyProfile': isMyProfile, 
                                                'comics': comics, 
                                                'followers': followers_users,
                                                'isFollower': isUserFollower,
                                                'follows': follows,
                                                'chapterViews': chapterViews})
        
    
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
    #users = User.objects.all()
    users = User.objects.exclude(id=request.user.id)
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

def profile_edit(request):
    if not request.user.is_authenticated:
          return redirect('index')    
    form = ProfileSettings()
    if request.method == 'POST':
        form = ProfileSettings(request.POST, request.FILES)
        if form.is_valid():
            #if avatar exists files is not empty
            avatar = request.FILES['avatar'] if 'avatar' in request.FILES else None
            nickname = form.cleaned_data.get('nickname')
            name = form.cleaned_data.get('first_name')
            last_name = form.cleaned_data.get('last_name')
            isNickname = form.cleaned_data.get('isNickname')
            description = form.cleaned_data.get('description')
            user = request.user
            profile = Profile.objects.get(user=user)
            if avatar != None:
                profile.avatar = avatar
            profile.nickname = nickname
            user.first_name = name
            user.last_name = last_name
            profile.description = description
            profile.isNickname = isNickname
            print(profile.isNickname)
            print(profile.description)
            print(profile.nickname)
            print(profile.avatar)
            print(user.first_name)
            print(user.last_name)
            user.save()
            profile.save()

    else: form = ProfileSettings()
    return render(request, 'profile_settings.html', {'form': form})

#API
class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

#Get user by id
class UserDetail(APIView):
    def get(self, request, pk):
        user = User.objects.get(id=pk)
        #get info without password and email_code
        serializer = UserSerializer(user)


        return Response(serializer.data)
    
#follow
class FollowOnUser(APIView):
    def post(self, request, id):
        if not request.user.is_authenticated:
            return Response({"error": "not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
        follow = None
        #print(Follow.objects.filter(user_from=request.user, user_to=User.objects.get(id=id)))
        try:
            follow = Follow.objects.filter(user_from=request.user, user_to=User.objects.get(id=id))
        except Follow.DoesNotExist:
            return Response("Error")
        if not follow.exists():
            follow = Follow.objects.create(user_from=request.user, user_to=User.objects.get(id=id))
            follow.save()
            return Response("Followed")
        else:
            follow.delete()
            return Response("Unfollowed")

#Update user and profile of this user info
class UserUpdate(APIView):
    def put(self, request):
        if not request.user.is_authenticated:
            return Response({"error": "not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
        user = request.user
        profile = Profile.objects.get(user=user)

        serializer = UserSerializer(user, data=request.data)
        profile_serializer = ProfileSerializer(profile, data=request.data)

        print(serializer)
        print(profile_serializer)

        if serializer.is_valid() and profile_serializer.is_valid():
            #if value is empty, then don't update this field
            #email, email_confirmed, password, is_superuser, is_staff, is_active, date_joined, profile.isBanned, profile.isVerified, profile.experience, profile.level, profile.pins, profile.main_pin, profile.ismoderator, profile.regdate, profile.balance, profile.bdate dont't update
            print(request.data)
            print(serializer.is_valid())
            print(profile_serializer.is_valid())
            
            #array with fields for check is empty or not
            fields = ["last_name", "first_name"]

            #update user
            for field in fields:
                if request.data[field] != "":
                    setattr(user, field, request.data[field])
            user.save()

            #update profile

            #array with fields for check is empty or not
            fieldsProfile = ["nickname", "avatar", "description"]

            for field in fieldsProfile:
                if request.data[field] != "":
                    setattr(profile, field, request.data[field])
            profile.save()

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#user edit for nickname, avatar, description, last_name, first_name