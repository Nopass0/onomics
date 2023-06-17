# Generated by Django 4.1.5 on 2023-06-16 03:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0008_charapter_isprivate_alter_comic_price_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='block',
            name='image',
            field=models.ImageField(upload_to='blocks/', verbose_name='Изображение'),
        ),
        migrations.AlterField(
            model_name='comic',
            name='image',
            field=models.ImageField(upload_to='images/covers/', verbose_name='Обложка'),
        ),
    ]
