from django.contrib import admin

from .models import *

# Register your models here.
#admin.site.register(UserInfomation, list_display=['gender'], search_fields=['gender'])
admin.site.register(Profile)
admin.site.register(Notification)
admin.site.register(Style)
admin.site.register(Pin)
admin.site.register(Country)
admin.site.register(Follow)