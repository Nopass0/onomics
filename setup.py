import os

#check if the virtual environment is already created or not and create it if not
if not os.path.exists('../myenv'):
    os.system('python -m venv ../myenv')

#install all the requirements
os.system('CALL myenv.bat && pip install -r requirements.txt')

os.system('CALL myenv.bat && cd frontend && npm install')

#run the command npm run build
os.system('CALL myenv.bat && cd frontend && npm run build')

#run the command python manage.py makemigrations
os.system('CALL myenv.bat && python manage.py makemigrations')

#run the command python manage.py migrate
os.system('CALL myenv.bat && python manage.py migrate')

#run the command python manage.py collectstatic
# os.system('CALL myenv.bat && python manage.py collectstatic')

#print question "You want to create super user now?(y/n)". if y create superuser, if n don't create superuser, if repeat the question
while True:
    create_superuser = input('You want to create super user now?(y/n) ')
    if create_superuser == 'y':
        username = input('Enter username: ')
        email = input('Enter email: ')
        os.system('CALL myenv.bat && python manage.py createsuperuser --username ' + username + ' --email ' + email)
        break
    elif create_superuser == 'n':
        break
    else:
        print('Please enter y or n')

#create a file run.py and write the code to run the project with comments and print statements. The file run.py will run three terminal windows: one for the virtual environment, one for the frontend and one for the backend. Before, running the project, it will activate the virtual environment and run command makemigrations, migrate, collectstatic and runserver. It will also run the frontend and backend in different terminal windows.
#code:
# import os
# from multiprocessing import Process

# if __name__ == '__main__' :
#     #go to back to the root directory of the project
#     os.system('cd ..')
#     #acivate the virtual environment
#     os.system('myenv\\Scripts\\activate')

#     #go to folder onomics
#     os.system('cd onomics')


#     p1 = Process(target=os.system, args=("cd .. && myenv\\Scripts\\activate && cd onomics && python manage.py makemigrations && python manage.py migrate && python manage.py runserver",))
#     p2 = Process(target=os.system, args=("cd .. && myenv\\Scripts\\activate && cd onomics && cd frontend && npm run dev:watch",))
#     p3 = Process(target=os.system, args=("cd .. && myenv\\Scripts\\activate && cd onomics && cd frontend && npx tailwindcss -i ./static/css/index.css -o ./static/css/compiled/style.css --watch",))

#     p1.start()
#     p2.start()
#     p3.start()

file = open('run.py', 'w')
file.write('import os\n')
file.write('from multiprocessing import Process\n')
file.write('\n')
file.write('if __name__ == \'__main__\' :\n')
file.write('    os.system(\'cd frontend && npm install --save --save-dev\')\n')
file.write('    os.system(\'myenv\\\\Scripts\\\\activate && python manage.py makemigrations && python manage.py migrate\')\n')
file.write('\n')
file.write('    p1 = Process(target=os.system, args=("cd .. && myenv\\\\Scripts\\\\activate && cd onomics && python manage.py makemigrations && python manage.py migrate && python manage.py runserver",))\n')
file.write('    p2 = Process(target=os.system, args=("cd .. && myenv\\\\Scripts\\\\activate && cd onomics && cd frontend && npm install && npm run dev:watch",))\n')
file.write('    p3 = Process(target=os.system, args=("cd .. && myenv\\\\Scripts\\\\activate && cd onomics && cd frontend && npm install && npx tailwindcss -i ./static/css/index.css -o ./static/css/compiled/style.css --watch",))\n')
file.write('\n')
file.write('    p1.start()\n')
file.write('    p2.start()\n')
file.write('    p3.start()\n')
file.close()



#in console, print the message that the setup is done successfully and the project is ready to run. Print question: Do you want to run the project now? (y/n) if y, run the file run.py
print('Setup is done successfully. The project is ready to run.')
print('Do you want to run the project now? (y/n)')
answer = input()

def question():
    if answer == 'y':
        os.system('CALL myenv.bat && python run.py')
    elif answer == 'n':
        print('You can run the project by running the file run.py. Use the command python run.py on root directory of the project.')
    else:
        print('Please enter y or n')
        question()

question()