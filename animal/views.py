from django.shortcuts import render
from django.http import JsonResponse
from models import Post
# Create your views here.

def post_list(request): 
    posts = Post.objects.all().values('title', 'description', 'photo')
    posts_list = list(posts)
    return JsonResponse(posts_list, safe=False)