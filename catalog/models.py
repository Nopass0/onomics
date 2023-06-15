from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
#from users.models import User

STATUS_CHOICES = (
    ("Complete", "Вышел"),
    ("Ongoing", "Выходит"),
    ("Anonce", "Анонс")
)

# Create your models here.
class Comic(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, verbose_name='Название')
    description = models.TextField(verbose_name='Описание')
    image = models.ImageField(upload_to='theme/static/images/covers', verbose_name='Обложка')
    price = models.IntegerField(verbose_name='Цена')
    slug = models.SlugField()

    #status, author, views, likes
    author = models.ForeignKey(User, blank=False, default=None, verbose_name='Автор', on_delete=models.CASCADE)
    status = models.CharField(max_length=12,
                              choices=STATUS_CHOICES,
                              default="Anonce",
                              verbose_name="Статус")

    views = models.IntegerField(default=0, verbose_name="Количество просмотров")
    likes = models.IntegerField(default=0, verbose_name="Количество лайков")

    tags = models.ManyToManyField('Tag', blank=True, related_name='tags', verbose_name='Теги')
    genres = models.ManyToManyField('Genre', blank=True, related_name='genres', verbose_name='Жанры')

    rating = models.IntegerField(default=0, verbose_name='Рейтинг')
    comments = models.ManyToManyField('Comment', blank=True, related_name='comments', verbose_name='Комментарии')

    def __str__(self):
        return self.title

class Genre(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, verbose_name='Название')
    slug = models.SlugField()

    def __str__(self):
        return self.name

class Tag(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, verbose_name='Название')
    slug = models.SlugField()

    def __str__(self):
        return self.name

class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField(verbose_name='Комментарий')
    author = models.ForeignKey(User, blank=False, default=None, verbose_name='Автор', on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True, verbose_name='Дата')

    reply_id = models.IntegerField(default=0, blank=True, verbose_name='Ответ на')

    def __str__(self):
        return self.text

class Charapter(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, verbose_name='Название')
    text = models.TextField()
    
    comic_id = models.ForeignKey('Comic', on_delete=models.CASCADE)

    comments = models.ManyToManyField('Comment', blank=True, related_name='ch_comments', verbose_name='Комментарии')

    #blocks - images with comic charapter

    def __str__(self):
        return self.name

class Block(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='theme/images/blocks', verbose_name='Изображение')
    charapter_id = models.ForeignKey('Charapter', on_delete=models.CASCADE)

    comments = models.ManyToManyField('Comment', blank=True, related_name='bl_comments', verbose_name='Комментарии')