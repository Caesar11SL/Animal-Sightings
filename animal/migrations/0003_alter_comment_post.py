# Generated by Django 4.0.6 on 2022-07-09 20:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('animal', '0002_alter_comment_body_alter_comment_post_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='post',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='animal.post'),
        ),
    ]
