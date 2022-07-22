from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('mock_login', views.mock_login),
    path('mock_signup', views.mock_signup),


    path('posts/', views.PostList.as_view(), name='post_list'),
    path('posts-protected/', views.PostListProtected.as_view(), name='post_list'),
    path('posts-protected/<int:pk>', views.PostDetail.as_view(), name='post_detail'),


    path('comments/', views.CommentList.as_view(), name='comment_list'),
    path('comments/<int:pk>', views.CommentDetail.as_view(), name='comment_detail'),


    path("api/signup", views.CreateUserView.as_view()),
]