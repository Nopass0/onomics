from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class UserInfomation(models.Model):
    #id = models.AutoField(primary_key=True)
    user = models.OneToOneField(User, verbose_name='Пользователь', on_delete=models.CASCADE)
    
    GENDERS = (
        ('m', 'Мужчина'),
        ('f', 'Женщина')
        )
    
    gender = models.CharField(choices=GENDERS, max_length=1, default='m', verbose_name='Пол')
    #avatar = models.ImageField()

    class Meta:
        verbose_name = 'Пользователи'