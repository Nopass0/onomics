from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    #tags = TagSerializer(read_only=True, many=True)
    #genres = GenreSerializer(read_only=True, many=True)
    
    class Meta:
        model = User
        fields = ('username', 'email', 'avatar', 'is_admin', 'is_moderator', 'is_banned', 'is_active',
                  'date_joined', 'last_login', 'charapters_readed', 'comics_readed')
