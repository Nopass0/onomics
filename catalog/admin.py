from django.contrib import admin

# Register your models here.

from .models import Comic, Genre, Tag, Comment, Charapter, Block

admin.site.register(Comic, list_display=['title', 'author', 'description', 'image', 'price', 'slug', 'rating'], list_filter=['genres', 'tags'], search_fields=['title', 'description', 'author'])
admin.site.register(Genre, list_display=['name', 'slug'], search_fields=['name'])
admin.site.register(Tag, list_display=['name', 'slug'], search_fields=['name'])
admin.site.register(Comment, list_display=['text', 'author', 'date'], search_fields=['text', 'author', 'date'])
admin.site.register(Charapter, list_display=['name', 'text', 'comic_id'], search_fields=['name', 'text'])
admin.site.register(Block, list_display=['image'], search_fields=['image'])