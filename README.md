# Modaforge

Modaforge is a 3D Printing service where users can connect with other users to print their 3D models for them.

### Developers
- Kaine Van Geffen
- Alan Dhooghe
- Ajdin Gaco

### Run project
```
pip install virtualenv
virtualenv venv
```
Folder structure should look like:
- modaforge
    - modaforge_workspace
    - venv
```
venv\Scripts\activate
pip install Django
python manage.py migrate
python manage.py runserver
```