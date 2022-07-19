from django.db import models
from django.core.files.storage import FileSystemStorage
# Create your models here.

# directory to send photos to when added 


class Post(models.Model):
    id = models.BigAutoField(primary_key=True)
    author = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    description = models.TextField()
    photo = models.TextField()
    like_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return self.title

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post')
    body = models.TextField()
    author = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return self.author