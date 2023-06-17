# Generated by Django 4.1.5 on 2023-06-17 08:13

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('catalog', '0017_rename_reply_id_comment_reply'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='author',
            field=models.OneToOneField(db_constraint=False, default=None, on_delete=django.db.models.deletion.CASCADE, related_name='author', to=settings.AUTH_USER_MODEL, verbose_name='Автор'),
        ),
    ]
