# Articles WEb Application

A simple CRUD API with Django and DjangoRestFramework

## To run Locally

## To run Backend

- Clone the repository

- Open the folder with any IDE of your choice

- Launch your terminal and change directory to octopus-backend-folder

- Download Python ('<https://www.python.org/downloads/>') if not downloaded

- Install and Add Python to environment path

- open command terminal/Prompt and change directory to the actopus-backend directory/folder

- Run 'pip install venv'

- Run 'python -m venv env'

- For Windows run '\env\Scripts\activate'

- For Mac run '\env\bin\activate'

- Run 'pip install -r requirements.txt'

- open settings.py in the Articles Folder

- scroll to Database section and set database name, port, user and password as per local postgresSQl setting or leave it to default hosted database

- Run 'python manage.py makemigrations Management'

- Run 'python manage.py migrate'

- Run 'python manage.py runserver'

## To Run Frontend

- Make sure django server is running on port 8000

- Open index.html

## Documentation

The following HttpRequest are Valid to the '/articles/all' endpoint

- GET [loads all articles]

The following HttpRequest are Valid to the '/articles/add' endpoint

- POST [create a new article]

The following HttpRequest are Valid to the '/articles/<int:id>' endpoint

- GET [loads a specific article with specified id]

- PUT [Update an article]

- DELETE [Delete an article]

An article has four fields

- title [Mandatory]
- content [Mandatory]
- creator [Mandatory]
- comment [Optional]
- id [Added automatically by default, no need to specify]

## Report

I created the project fairly easily as I am well aquainted and conversant with django and djangorestframework. I didn't experience any difficulty during the course of this project development, as this is not the first time I will be building this type of application
