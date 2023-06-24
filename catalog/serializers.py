from rest_framework import serializers
from .models import *

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'name', 'slug')

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('id', 'name', 'slug')

class ComicSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)
    genres = GenreSerializer(read_only=True, many=True)
    
    class Meta:
        model = Comic
        fields = ('id', 'title', 'description', 'image', 'slug', 'tags', 'genres', 'rating', 'comments')

class ComicMiniSerializer(serializers.ModelSerializer):
    tags = TagSerializer(read_only=True, many=True)
    genres = GenreSerializer(read_only=True, many=True)
    
    class Meta:
        model = Comic
        fields = ('title', 'description', 'image', 'tags', 'genres')


#bookmarks serializer
class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = ('read', 'readed', 'droped', 'will_read')