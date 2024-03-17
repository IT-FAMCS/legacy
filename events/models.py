from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    dates = models.DateField()
    info = models.TextField()
    FAQ = models.TextField()
    links = models.TextField()
    
    def __str__(self):
        return self.title