# Generated by Django 4.1.5 on 2023-06-16 03:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0007_alter_block_image_alter_comic_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='charapter',
            name='isPrivate',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='comic',
            name='price',
            field=models.IntegerField(blank=True, null=True, verbose_name='Цена'),
        ),
        migrations.AlterField(
            model_name='comic',
            name='slug',
            field=models.SlugField(blank=True, null=True),
        ),
    ]