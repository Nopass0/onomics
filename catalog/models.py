from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from sorl.thumbnail import ImageField, get_thumbnail
from django.db.models.signals import post_save
#from users.models import User

STATUS_CHOICES = (
    ("Complete", "Вышел"),
    ("Ongoing", "Выходит"),
    ("Anonce", "Анонс")
)

MODERATION_STATUS_CHOICES = (
    ("inspect", "На рассмотрении"),
    ("cancelled ", "Отклонено"),
    ("accepted", "Одобренно")
)

# Create your models here.
class Comic(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100, verbose_name='Название')
    description = models.TextField(verbose_name='Описание')
    image = models.ImageField(upload_to=f'theme/static/covers/', verbose_name='Обложка') # Width: 180px, Height: 270px
    price = models.IntegerField(blank=True, null=True, verbose_name='Цена')
    slug = models.SlugField(blank=True, null=True)

    #status, author, views, likes
    #author = models.OneToOneField(User, blank=False, default=None, verbose_name='Автор', on_delete=models.CASCADE)
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

    #function on delete
    def delete(self, *args, **kwargs):
        self.image.delete()
        super().delete(*args, **kwargs)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return "/comics/%i/" % self.id
    

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

#Comment model for comics, charapters and blocks, with likes and author and text and date and etc.
class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.TextField(verbose_name='Текст')
    date = models.DateTimeField(auto_now_add=True, verbose_name='Дата')
    #likes = models.IntegerField(default=0, verbose_name='Лайки')

    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.text

class Chapter(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, verbose_name='Название')
    text = models.TextField()

    moderation_status = models.CharField(max_length=12,
                              choices=MODERATION_STATUS_CHOICES,
                              default="inspect",
                              verbose_name="Статус модерации")
    
    isPrivate = models.BooleanField(default=False)
    
    comic_id = models.ForeignKey('Comic', on_delete=models.CASCADE)

    sequence_number = models.IntegerField(null=True, verbose_name='Номер главы в комиксе')

    comments = models.ManyToManyField('Comment', blank=True, related_name='ch_comments', verbose_name='Комментарии')

    #blocks - images with comic chapter

    def __str__(self):
        return '{0} - {1} - {2}'.format(self.id, self.name, self.sequence_number)

class Block(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to=f'blocks/{id}', verbose_name='Изображение') # Width: 800px, Height: 1080px
    charapter_id = models.ForeignKey('chapter', on_delete=models.CASCADE)

    sequence_number = models.IntegerField(null=True, verbose_name='Номер блока в главе')

    comments = models.ManyToManyField('Comment', blank=True, related_name='bl_comments', verbose_name='Комментарии')

#bookmarks model: id, user, read(many to many), readed(many to many), droped(many to many), will_read(many to many)
class Bookmark(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    read = models.ManyToManyField('Comic', blank=True, related_name='read', verbose_name='Прочитано')
    readed = models.ManyToManyField('Comic', blank=True, related_name='readed', verbose_name='Читаю')
    droped = models.ManyToManyField('Comic', blank=True, related_name='droped', verbose_name='Брошено')
    will_read = models.ManyToManyField('Comic', blank=True, related_name='will_read', verbose_name='Буду читать')

    def __str__(self):
        return self.user.username

    @receiver(post_save, sender=User, dispatch_uid='save_new_user_profile')
    def save_bookmark(sender, instance, created, **kwargs):
        user = instance
        if created:
            bookmark = Bookmark(user=user)
            bookmark.save()