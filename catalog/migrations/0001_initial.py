# Generated by Django 4.1.5 on 2023-01-06 13:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('text', models.TextField()),
                ('author_id', models.IntegerField()),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('slug', models.SlugField()),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('slug', models.SlugField()),
            ],
        ),
        migrations.CreateModel(
            name='Comic',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='images/covers')),
                ('price', models.IntegerField()),
                ('slug', models.SlugField()),
                ('rating', models.IntegerField(default=0)),
                ('comments', models.ManyToManyField(blank=True, related_name='comments', to='catalog.comment')),
                ('genres', models.ManyToManyField(blank=True, related_name='genres', to='catalog.genre')),
                ('tags', models.ManyToManyField(blank=True, related_name='tags', to='catalog.tag')),
            ],
        ),
        migrations.CreateModel(
            name='Charapter',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('text', models.TextField()),
                ('comic_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='catalog.comic')),
            ],
        ),
        migrations.CreateModel(
            name='Block',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('image', models.ImageField(upload_to='images/blocks')),
                ('charapter_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='catalog.charapter')),
            ],
        ),
    ]
