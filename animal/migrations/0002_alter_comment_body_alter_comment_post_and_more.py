# Generated by Django 4.0.6 on 2022-07-09 17:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('animal', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='body',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='comment',
            name='post',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Post', to='animal.post'),
        ),
        migrations.AlterField(
            model_name='post',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='post',
            name='like_count',
            field=models.IntegerField(default=0),
        ),
    ]
