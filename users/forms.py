from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(label='Username', max_length=100, widget=forms.TextInput(attrs={'class': 'w-full mx-4 my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2', 'placeholder': '😎 Логин'}))
    password = forms.CharField(label='Password', max_length=100, widget=forms.PasswordInput(attrs={'class': 'w-full mx-4 my-1 bg-zinc-800 text-gray-200 rounded-lg px-2 py-2', 'placeholder': '🤫 Пароль'}))
