from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Comic)
admin.site.register(Chapter)
admin.site.register(Comment)
admin.site.register(View)
admin.site.register(Like)
admin.site.register(Bookmark)
admin.site.register(Genre)
admin.site.register(Block)