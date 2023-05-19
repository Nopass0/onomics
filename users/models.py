from django.db import models

# Create your models here.
class User(models.Model):
    id = models.AutoField(primary_key=True)

    username = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
     
    avatar = models.ImageField(upload_to='images/avatars')

    is_admin = models.BooleanField(default=False)
    is_moderator = models.BooleanField(default=False)
    is_banned = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(auto_now=True)

    charapters_readed = models.IntegerField(default=0)
    comics_readed = models.IntegerField(default=0)

    bookmarks_read = models.ManyToManyField('catalog.Comic', blank=True, related_name='bookmarks_read')
    bookmarks_readed = models.ManyToManyField('catalog.Comic', blank=True, related_name='bookmarks_readed')
    bookmarks_favorites = models.ManyToManyField('catalog.Comic', blank=True, related_name='bookmarks_favorites')
    bookmarks_trash = models.ManyToManyField('catalog.Comic', blank=True, related_name='bookmarks_trash')

    def __str__(self):
        return self.username