from django.shortcuts import render
from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer, UserSerializer
from rest_framework import generics, permissions
from rest_framework.generics import CreateAPIView
from django.contrib.auth import get_user_model
from django.http import JsonResponse

# Create your views here.

def mock_login(request):
    return JsonResponse({'loggedIn':True, 'username': 'mock_user'})

def mock_signup(request):
    return JsonResponse({'loggedIn':True, 'username': 'mock_user'})


# Post CRUD
class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostListProtected(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.AllowAny]

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer



# Comment CRUD
class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer




class CreateUserView(CreateAPIView):

    model = get_user_model()
    permission_classes = [
        permissions.AllowAny,  
    ]
    serializer_class = UserSerializer