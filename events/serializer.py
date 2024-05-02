from rest_framework import serializers
from .models import Event, Links


class LinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Links
        fields = ['id', 'link', 'title']


class EventSerializer(serializers.ModelSerializer):
    links = LinksSerializer(many=True)

    class Meta:
        model = Event
        fields = '__all__'

    def create(self, validated_data):
        links_data = validated_data.pop('links', [])
        event = Event.objects.create(**validated_data)
        for link_data in links_data:
            Links.objects.create(event=event, **link_data)
        return event
