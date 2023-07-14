from rest_framework import serializers
from .models import *

#profile serializer
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id', 
                  'nickname', 
                  'country', 
                  'pins', 
                  'main_pin',
                  'level',
                  'experience',
                  'isVerified',
                  'isOnline',
                  'avatar',
                  'background', 
                  'balance', 
                  'ismoderator', 
                  'email_confirmed')

#user serializer
class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    class Meta:
        model = User
        fields = ('id',
                   'username', 
                   'email', 
                   'profile', 
                   'is_staff', 
                   'is_superuser', 
                   'is_active', 
                   'date_joined', 
                   'last_login', 
                   'first_name', 
                   'last_name')

