from base64 import urlsafe_b64decode
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
#from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView

from .forms import *
from .tokens import *

# Create your views here.
'''
class SignUp(CreateView):
    form_class = EmailUserCreationForm #UserCreationForm
    success_url = reverse_lazy("login")
    template_name = "register.html"
'''
'''
def login(request):
    form = LoginForm()
    if request.method == "POST":
	    form = LoginForm(request.POST)
        if form.is_valid():
		    username = form.cleaned_data.get('username')
		    password = form.cleaned_data.get('password1')
		    user = authenticate(username=username, password=password)

			if user is not None:
				login(request, user)
			    return redirect('profile')
	    else:
		    form = LoginForm()
	return render(request, 'registration/login.html', {'form': form})
'''
def signup(request):
	form = SignUpForm()
	if request.method == "POST":
		form = SignUpForm(request.POST)
		if form.is_valid():
			form.save()
			username = form.cleaned_data.get('username')
			email = form.cleaned_data.get('email')
			avatar = form.cleaned_data.get('avatar')
			password = form.cleaned_data.get('password1')
			user = authenticate(username=username, password=password)

			if user is not None:
				login(request, user)
			return redirect('profile')
		else:
			form = SignUpForm()

	return render(request, 'register.html', {'form': form})

def profile(request):
    return render(request, 'profile.html')

def account_activation_sent_view(request):
    return render(request, 'registration/account_activation_sent.html')

'''
def account_activate(request, uidb64, token):
    try:
        uid = urlsafe_b64decode(uidb64).decode()
        print(uid)
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist) as e:
        print(e)
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.profile.email_confirmed = True
        user.save()
        login(request, user)
        return redirect('users:dashboard')
    else:
        return render(request, 'registration/account_activation_invalid.html')

# views.py
'''
'''
@login_required
@transaction.atomic
def update_profile(request):
    if request.method == 'POST':
        user_form = UserForm(request.POST, instance=request.user)
        profile_form = ProfileForm(request.POST, instance=request.user.profile)
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
            messages.success(request, _('Ваш профиль был успешно обновлен!'))
            return redirect('settings:profile')
        else:
            messages.error(request, _('Пожалуйста, исправьте ошибки.'))
    else:
        user_form = UserForm(instance=request.user)
        profile_form = ProfileForm(instance=request.user.profile)
    return render(request, 'profiles/profile.html', {
        'user_form': user_form,
        'profile_form': profile_form
    })
'''