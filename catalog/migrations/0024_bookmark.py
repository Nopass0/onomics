# Generated by Django 4.1.5 on 2023-06-17 12:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('catalog', '0023_alter_comic_author'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bookmark',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('droped', models.ManyToManyField(blank=True, related_name='droped', to='catalog.comic', verbose_name='Брошено')),
                ('read', models.ManyToManyField(blank=True, related_name='read', to='catalog.comic', verbose_name='Прочитано')),
                ('readed', models.ManyToManyField(blank=True, related_name='readed', to='catalog.comic', verbose_name='Читаю')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('will_read', models.ManyToManyField(blank=True, related_name='will_read', to='catalog.comic', verbose_name='Буду читать')),
            ],
        ),
    ]