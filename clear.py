import os

#delete the __pycache__ folder in onomics, frontend, users, comics and delete migrations folder in onomics, frontend, users, comics

os.system('cd onomics && rmdir /s /q __pycache__')
os.system('cd frontend && rmdir /s /q __pycache__')
os.system('cd users && rmdir /s /q __pycache__')
os.system('cd comics && rmdir /s /q __pycache__')

os.system('cd onomics && rmdir /s /q migrations')
os.system('cd frontend && rmdir /s /q migrations')
os.system('cd users && rmdir /s /q migrations')
os.system('cd comics && rmdir /s /q migrations')

#delete the db.sqlite3 file in onomics

os.system('del db.sqlite3')

#delete node_modules folder in frontend

os.system('cd frontend && rmdir /s /q node_modules')

#delete the avatars, blocks, covers folders in frontend\static\images

os.system('cd frontend && rmdir /s /q static\images\avatars\avatars')
os.system('cd frontend && rmdir /s /q static\images\blocks')
os.system('cd frontend && rmdir /s /q static\images\covers')

#create the avatars, blocks, covers folders in frontend\static\images

os.system('cd frontend && mkdir static\images\avatars\avatars')
os.system('cd frontend && mkdir static\images\blocks')
os.system('cd frontend && mkdir static\images\covers')