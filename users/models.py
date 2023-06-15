from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    GENDERS = (
        ('m', 'Мужчина'),
        ('f', 'Женщина')
    )

    following = models.ManyToManyField('self', verbose_name='Подписки', related_name='followers', symmetrical=False, blank=True)

    nickname = models.CharField(max_length=25, blank=True, verbose_name='Ник')
    
    gender = models.CharField(choices=GENDERS, max_length=1, default='m', verbose_name='Пол')
    avatar = models.ImageField(default='images/avatars/default.jpg', upload_to='images/avatars', verbose_name='Аватар')

    bdate = models.DateField(blank=True, null=True, verbose_name="Дата рождения")
    regdate = models.DateTimeField(auto_now_add=True, verbose_name="Дата и время регистрации")

    balance = models.IntegerField(default=0, verbose_name="Цена")
    ismoderator = models.BooleanField(default=False, verbose_name="Является ли модератером")

    email_code = models.CharField(max_length=4, blank=True, null=True, verbose_name='Код подтверждения почты')
    email_confirmed = models.BooleanField(default=False, verbose_name='Подтверждение почты')

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):
        instance.profile.save()

    def __str__(self):
        return f'{self.user.username} Profile' 

    class Meta:
        verbose_name = 'Пользователи'

"""
class User(AbstractUser):
    GENDERS = (
        ('m', 'Мужчина'),
        ('f', 'Женщина')
    )
    
    gender = models.CharField(choices=GENDERS, max_length=1, default='m', verbose_name='Пол')
    avatar = models.ImageField(default='theme/images/avatars/default.jpg', upload_to='theme/images/avatars', verbose_name='Аватар')

    bdate = models.DateField(blank=True, verbose_name="Дата рождения")
    regdate = models.DateTimeField(auto_now_add=True, verbose_name="Дата и время регистрации")

    balance = models.IntegerField(default=0, verbose_name="Цена")
    ismoderator = models.BooleanField(default=False, verbose_name="Является ли модератером")

    class Meta:
        verbose_name = 'Пользователи'
"""