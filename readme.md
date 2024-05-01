## Запуск
## Создать в корневой папке папку с именем base


## Создать вирутальное окружение и утсановить Django

```
python -m venv venv
venv/Scripts/activate
python -m pip install django
```
Выполнить миграции
```
python manage.py makemigraions
python manage.py migrate
```
Переходиим в корневую папку, где содержится manage.py
```
python manage.py runserver
```
