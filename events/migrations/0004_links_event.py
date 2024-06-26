# Generated by Django 5.0.2 on 2024-03-21 00:08

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0003_links_remove_event_links'),
    ]

    operations = [
        migrations.AddField(
            model_name='links',
            name='event',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='links', to='events.event'),
            preserve_default=False,
        ),
    ]
