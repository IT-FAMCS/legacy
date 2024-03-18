from rest_framework import  serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'short_title', 'title', 'description', 'dates', 'info', 'FAQ', 'links']
