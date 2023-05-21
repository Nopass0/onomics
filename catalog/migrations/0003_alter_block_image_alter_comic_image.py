# Generated by Django 4.1.5 on 2023-05-21 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0002_alter_block_image_alter_charapter_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='block',
            name='image',
            field=models.ImageField(upload_to='theme/images/blocks', verbose_name='Изображение'),
        ),
        migrations.AlterField(
            model_name='comic',
            name='image',
            field=models.ImageField(upload_to='theme/static/images/covers', verbose_name='Обложка'),
        ),
    ]
