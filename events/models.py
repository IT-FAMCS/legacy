from django.db import models
import datetime


class Event(models.Model):
    short_title = models.CharField(max_length=10)
    title = models.CharField(max_length=50)
    description = models.TextField(default = "Отсутствует")
    dates = models.DateField(default = datetime.date.today)
    info = models.TextField(default = "Отсутствует")
    FAQ = models.TextField(default = "Отсутствует")
    links = models.TextField(default = "Отсутствует")
    
    def __str__(self):
        return self.title