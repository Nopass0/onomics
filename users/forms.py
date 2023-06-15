from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User

class SignUpForm(UserCreationForm):
	username = forms.CharField(
		max_length=25,
		min_length=4,
		required=True,
		widget=forms.TextInput(
				attrs={
					"placeholder": "First Name",
					"class": "form-control"
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
					"class": "form-control"
				}
			)
		)
	avatar = forms.ImageField(
	    widget=forms.FileInput(
		    attrs={
			    "class": "lalala",
            }
        ),
    )
    '''
	email = forms.EmailField(
		max_length=254,
		widget=forms.EmailInput(
			attrs={
				"placeholder": "Email",
				"class": "form-control"
			}
		)
	)

	class Meta:
		model = User
		fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2',)
		
class LoginForm(AuthenticationForm):
	username = forms.CharField(
		max_length=25,
		min_length=4,
		required=True,
		widget=forms.TextInput(
				attrs={
					"placeholder": "First Name",
					"class": "form-control"
				}
			)
		)


	class Meta:
		model = User
		fields = ('username', 'password1',)