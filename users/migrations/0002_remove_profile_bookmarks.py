# Generated by Django 4.1.5 on 2023-06-17 12:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='bookmarks',
        ),
    ]
