from django.db import models

class Information(models.Model):
    boss_info = models.TextField()
    advises = models.TextField()
    how_to = models.TextField()
    FAQ = models.TextField()
    treatment = models.TextField()
    exclusion = models.TextField()
    history = models.TextField()