from rest_framework import serializers
from .models import Post, Comment
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        
        user = User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
        )
        return user

    class Meta:
        model = User
        fields = ("id", "username", "password", "email")

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    post = serializers.HyperlinkedRelatedField(
        view_name='post_detail',
        read_only=True
    )

    post_id = serializers.PrimaryKeyRelatedField(
        queryset=Post.objects.all(),
        source='post'
    )


    class Meta: 
        model = Comment
        fields = ('id', 'post', 'post_id', 'body', 'author' )

class PostSerializer(serializers.HyperlinkedModelSerializer):
    comments = CommentSerializer(
        many=True,
        read_only=True
    )

    post_url = serializers.ModelSerializer.serializer_url_field(
       view_name='post_detail'
    )

    class Meta:
        model = Post
        fields = ('id', 'title', 'description', 'photo', 'comments', 'post_url')
