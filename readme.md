## Запуск
##Создать в корневой папке папку с именем base


##Создать вирутальное окружение и утсановить Django и CorsHeadders

```
python -m venv venv
venv/Scripts/activate
python -m pip install django
python -m pip install django-cors-headers
```
Переходиим в корневую папку, где содержится manage.py
```
python manage.py runserver
```
