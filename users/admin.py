from django.contrib import admin

from .models import UserInfomation

# Register your models here.
admin.site.register(UserInfomation, list_display=['gender'], search_fields=['gender'])