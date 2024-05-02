from rest_framework import serializers
from .models import Information

class InfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Information
        fields = ['id', 'short_title', 'boss_info', 'advises', 'how_to', 'treatment', 'exclusion', 'FAQ', 'history']

    def create(self, validated_data):
        return Information.objects.create(**validated_data)
