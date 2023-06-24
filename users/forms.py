from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User

class SignUpForm(UserCreationForm):
	username = forms.CharField(
		label='',
		max_length=25,
		min_length=4,
		required=True,
		widget=forms.TextInput(
				attrs={
					"placeholder": "*Никнейм",
					"class": "outline-0 border-none outline-none mt-6 my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2"
				}
			)
		)
	'''
	nickname = forms.CharField(
		max_length=25,
		required=True,
		widget=forms.TextInput(
				attrs={
					"placeholder": "Last Name",
					"class": "mx-12 my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2"
				}
			)
		)
	avatar = forms.ImageField(
	    widget=forms.FileInput(
		    attrs={
			    "class": "mx-12 my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2",
            }
        ),
    )
    '''
    
	first_name = forms.CharField(
		label='',
		max_length=254,
		widget=forms.TextInput(
			attrs={
				"placeholder": "*Имя",
				"class": "outline-0 border-none outline-none my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2"
			}
		)
	)

	last_name = forms.CharField(
		label='',
		max_length=254,
		widget=forms.TextInput(
			attrs={
				"placeholder": "*Фамилия",
				"class": "outline-0 border-none outline-none my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2"
			}
		)
	)

	email = forms.EmailField(
		label='',
		max_length=254,
		widget=forms.EmailInput(
			attrs={
				"placeholder": "*Email",
				"class": "outline-0 border-none outline-none my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2"
			}
		)
	)

	password1 = forms.CharField(
		label='',
		widget=forms.PasswordInput(
		attrs={
				"placeholder": "*Пароль",
				"class": "outline-0 border-none outline-none my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2"
			}
	))

	password2 = forms.CharField(
		label='',
		widget=forms.PasswordInput(
		attrs={
				"placeholder": "*Повторите пароль",
				"class": "outline-0 border-none outline-none my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2"
			}
	))

	class Meta:
		model = User
		fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2',)
		

class SignUpProfile(forms.Form):
	bdate = forms.DateField(
		label='',
		required=True,
		widget=forms.DateInput(
				attrs={
					"placeholder": "*Дата рождения",
					"class": "outline-0 border-none outline-none my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2",
					"id": "datetimepicker"
				}
			)
	)
    
	CHOICES = (('m', 'Мужской'),('f', 'Женский'),)
	gender = forms.ChoiceField(
		label='',
		choices=CHOICES,
		widget=forms.Select(
		attrs={
			"class": "outline-0 border-none outline-none my-1 bg-zinc-800 text-gray-200 rounded-lg px-5 py-2 cursor-pointer",
		}
	))

class LoginUserForm(forms.Form):
    username = forms.CharField(
	    label='',
		max_length=25,
		min_length=4,
		required=True,
		widget=forms.TextInput(
				attrs={
					"placeholder": "*Логин/Почта",
					"class": "outline-0 border-none outline-none my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2"
				}
			)
		)
    
    password = forms.CharField(
	    label='',
		widget=forms.PasswordInput(
		attrs={
				"placeholder": "*Пароль",
				"class": "outline-0 border-none outline-none my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2"
			}
	))
    
class ConfirmEmail(forms.Form):
    code = forms.CharField(
		label='',
		max_length=4,
		min_length=4,
		required=True,
		widget=forms.TextInput(
				attrs={
					"placeholder": "Код",
					"class": "outline-0 border-none outline-none my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2"
				}
			)
		)
    