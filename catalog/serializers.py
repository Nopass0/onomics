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
        extra_kwargs = { 'title': {'required': False}, 'description': {'required': False}, 'image': {'required': False}, 'tags': {'required': False}, 'genres': {'required': False} }


#Chapter serializer
class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapter
        fields = ('name', 'isPrivate', 'sequence_number')
        extra_kwargs = { 'name': {'required': True}, 'isPrivate': {'required': False}, 'sequence_number': {'required': False} }

#bookmarks serializer
class BookmarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmark
        fields = ('read', 'readed', 'droped', 'will_read')

class BlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Block
        fields = ('image', 'sequence_number')
        extra_kwargs = { 'image': {'required': False}, 'sequence_number': {'required': False} }

