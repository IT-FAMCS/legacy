from rest_framework import  serializers
from .models import Event, Links


class LinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Links
        fields = ['id', 'link', 'title']
class EventSerializer(serializers.ModelSerializer):
    links = LinksSerializer(many = True)
    class Meta:
        model = Event
        fields = '__all__'