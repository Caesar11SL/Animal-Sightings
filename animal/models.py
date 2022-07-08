from django.db import models
from django.core.files.storage import FileSystemStorage
# Create your models here.

# directory to send photos to when added 


class Post(models.Model):
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    description = models.TextField()
    photo = models.TextField()
    # models.ImageField(storage=)
    like_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='Post')
    body = models.TextField()
    author = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.author