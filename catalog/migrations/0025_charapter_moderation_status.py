# Generated by Django 4.1.5 on 2023-06-21 16:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0024_bookmark'),
    ]

    operations = [
        migrations.AddField(
            model_name='charapter',
            name='moderation_status',
            field=models.CharField(choices=[('inspect', 'На рассмотрении'), ('cancelled ', 'Отклонено'), ('accepted', 'Одобренно')], default='inspect', max_length=12, verbose_name='Статус модерации'),
        ),
    ]