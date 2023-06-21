from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from catalog.models import *

class Profile(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    GENDERS = (
        ('m', 'Мужчина'),
        ('f', 'Женщина')
    )

    #following = models.ManyToManyField('self', verbose_name='Подписки', related_name='followers', symmetrical=False, blank=True)

    #follows = models.ForeignKey('Follow', on_delete=models.SET_NULL, blank=True, null=True, verbose_name='Подписки')


    nickname = models.CharField(max_length=25, blank=True, verbose_name='Ник')
    
    gender = models.CharField(choices=GENDERS, max_length=1, default='m', verbose_name='Пол')
    avatar = models.ImageField(default='avatars/default.jpg', upload_to='avatars/', verbose_name='Аватар')

    description = models.TextField(blank=True, verbose_name='Описание')

    level = models.IntegerField(default=0, verbose_name="Уровень")
    experience = models.IntegerField(default=0, verbose_name="Опыт")
    experience_unitl_next_level = models.IntegerField(default=0, verbose_name="Опыт нужный для перехода на следующий уровень")

    bdate = models.DateField(blank=True, null=True, verbose_name="Дата рождения")
    regdate = models.DateTimeField(auto_now_add=True, verbose_name="Дата и время регистрации")

    isBannded = models.BooleanField(default=False, verbose_name="Забанен")
    isOnline = models.BooleanField(default=False, verbose_name="Онлайн")

    isNickname = models.BooleanField(default=False, verbose_name="Звать ли по прозвищу")

    isVerified = models.BooleanField(default=False, verbose_name="Верифицирован")

    country = models.ForeignKey('Country', on_delete=models.SET_NULL, blank=True, null=True, verbose_name="Страна")
    pins = models.ManyToManyField('Pin', blank=True, verbose_name="Значки")

    background = models.ForeignKey('ProfileBackground', related_name='background', on_delete=models.SET_NULL, blank=True, null=True, verbose_name="Фон профиля")

    #main pin id (int)
    main_pin = models.IntegerField(default=0, verbose_name="Основной значок")

    balance = models.IntegerField(default=0, verbose_name="Баланс пользователя")
    ismoderator = models.BooleanField(default=False, verbose_name="Является ли модератером")

    email_code = models.CharField(max_length=4, blank=True, null=True, verbose_name='Код подтверждения почты')
    email_confirmed = models.BooleanField(default=False, verbose_name='Подтверждение почты')

    #on delete
    def delete(self, *args, **kwargs):
        self.avatar.delete()
        super().delete(*args, **kwargs)


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

#Country model
class Country(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, verbose_name="Название страны")
    image = models.ImageField(default='countries/default.jpg', upload_to='countries/', verbose_name='Флаг страны')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Страна'
        verbose_name_plural = 'Страны'

#Pin model
class Pin(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Пользователь")
    image = models.ImageField(default='pins/default.jpg', upload_to='pins/', verbose_name='Значок')
    level = models.IntegerField(default=0, verbose_name="Уровень значка")
    name = models.CharField(max_length=50, verbose_name="Название значка")
    experience = models.IntegerField(default=0, verbose_name="Опыт значка")
    experience_unitl_next_level = models.IntegerField(default=0, verbose_name="Опыт нужный для перехода на следующий уровень значка")

    def __str__(self):
        return f'{self.user.username} Pin' 

    class Meta:
        verbose_name = 'Значок'
        verbose_name_plural = 'Значки'

#Style model
class Style(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, verbose_name="Название стиля")
    style = models.TextField(verbose_name="Стиль") #css

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Стиль'
        verbose_name_plural = 'Стили'

#Notification model
class Notification(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="Пользователь")
    title = models.CharField(max_length=50, verbose_name="Заголовок")
    text = models.TextField(verbose_name="Текст")
    date = models.DateTimeField(auto_now_add=True, verbose_name="Дата и время")
    #image if exists
    image = models.ImageField(blank=True, null=True, upload_to='notifications/', verbose_name='Изображение')

    TYPES = (
        ('info', 'Информация'),
        ('warning', 'Предупреждение'),
        ('error', 'Ошибка'),
    )

    notification_type = models.CharField(max_length=50, choices=TYPES, default='info', verbose_name="Тип уведомления")

    isReaded = models.BooleanField(default=False, verbose_name="Прочитано")

    def __str__(self):
        return f'{self.user.username}' 

    class Meta:
        verbose_name = 'Уведомление'
        verbose_name_plural = 'Уведомления'

#Profile background model
class ProfileBackground(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(default='profile_backgrounds/default.jpg', upload_to='profile_backgrounds/', verbose_name='Фон профиля')
    #user author
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='author', blank=True, null=True, verbose_name="Автор фона профиля")

    def __str__(self):
        return f'{self.image}' 

    class Meta:
        verbose_name = 'Фон профиля'
        verbose_name_plural = 'Фоны профиля'

#Follow model from user to user
class Follow(models.Model):
    id = models.AutoField(primary_key=True)
    user_from = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_from', verbose_name="Пользователь который подписывается")
    user_to = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_to', verbose_name="Пользователь на которого подписываются")
    date = models.DateTimeField(auto_now_add=True, verbose_name="Дата и время")

    def __str__(self):
        return f'{self.user_from.username} Follow' 

    class Meta:
        verbose_name = 'Подписка'
        verbose_name_plural = 'Подписки'