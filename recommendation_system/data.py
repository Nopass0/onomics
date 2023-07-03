import datetime
import os
from django.contrib.auth.models import *
from django.shortcuts import render
from users.models import *
from catalog.models import *

#generate dataset for training. id::gender::age users.dat
'''
- Age is chosen from the following ranges:

	*  1:  "Under 18"
	* 18:  "18-24"
	* 25:  "25-34"
	* 35:  "35-44"
	* 45:  "45-49"
	* 50:  "50-55"
	* 56:  "56+"
'''

def generateUsersDataset():
    #write to file .dat with separator ::
    #path to templates folder
    path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'templates')
    file = open(os.path.join(path, 'users.dat'), 'w')
    #get all users
    users = User.objects.all()
    for user in users:
        #get user id
        user_id = user.id
        #get gender of user m or f
        gender = user.profile.gender
        #get age of user
        bdate = user.profile.bdate
        #get now year
        now = datetime.datetime.now()
        year = now.year
        #get age from bdate. bdate is string in format dd-mm-yyyy. now date - bdate = age
        try:
            age = year - int(bdate[-4:])
        except:
            continue
        age = user.profile.age
        #normalize age
        if age < 18:
            age = 1
        elif age >= 18 and age < 25:
            age = 18
        elif age >= 25 and age < 35:
            age = 25
        elif age >= 35 and age < 45:
            age = 35
        elif age >= 45 and age < 50:
            age = 45
        elif age >= 50 and age < 56:
            age = 50
        elif age >= 56:
            age = 56

        #write to file every string with separator :: and \n for new line
        line = f"{user_id}::{gender}::{age}\n"
        print(line)
        file.write(line)
    file.flush()
    file.close()
#generate dataset for training. comic_id::title::genres(separated by |) comics.dat
def generateComicsDataset():
    #write to file .dat with separator ::
    #path to templates folder
    path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'templates')
    file = open(os.path.join(path, 'comics.dat'), 'w')
    #get all comics
    comics = Comic.objects.all()
    for comic in comics:
        #get comic id
        comic_id = comic.id
        #get comic title
        title = comic.title
        #get comic genres
        genres = comic.genres.all()
        #get genres string
        genres_string = ""
        for genre in genres:
            genres_string += f"{genre.name}|"
        #remove last |
        genres_string = genres_string[:-1]
        #write to file every string with separator :: and \n for new line
        line = f"{comic_id}::{title}::{genres_string}\n"
        file.write(line)
    file.close()

#generate dataset for training. user_id::comic_id::likes_of_chapters(int)::comments_of_whole_comic(int)::percent_of_views_chapters_of_comics ratings.dat

def usersDataset(request):
    #generate dataset for training and return render it
    generateUsersDataset()
    return render(request, 'users.dat')

def comicsDataset(request):
    #generate dataset for training and return render it
    generateComicsDataset()
    return render(request, 'comics.dat')

#urls for views
from django.urls import path
urlpatterns = [
    path('users_ds/', usersDataset, name='users_ds'),
    path('comics_ds/', comicsDataset, name='comics_ds'),
]