from django.db import models

class Department(models.Model):
    title = models.TextField()
    description = models.TextField()
    structure = models.TextField()
    work = models.TextField()
    in_events = models.TextField()
    FAQ =  models.TextField()
    links = models.TextField()
    def __str__(self):
        return self.title