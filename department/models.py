from django.db import models

class Department(models.Model):
    short_title = models.CharField(max_length=10)
    title = models.TextField()
    description = models.TextField(default = "Отсутсвует")
    structure = models.TextField(default = "Отсутсвует")
    work = models.TextField(default = "Отсутсвует")
    in_events = models.TextField(default = "Отсутсвует")
    FAQ =  models.TextField(default = "Отсутсвует")
    links = models.TextField(default = "Отсутсвует")
    def __str__(self):
        return self.title