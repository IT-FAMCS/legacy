# Generated by Django 5.0.2 on 2024-03-20 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='preparations',
            field=models.TextField(default='Отсутствует'),
        ),
    ]
