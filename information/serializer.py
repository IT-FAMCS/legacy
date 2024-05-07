from rest_framework import serializers
from .models import Information

class InfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Information
        fields = '__all__'

    def create(self, validated_data):
        info_name = validated_data.get('short_name')

        try:
            event = Information.objects.get(short_name=info_name)
            for key, value in validated_data.items():
                setattr(event, key, value)
            event.save()
        except Information.DoesNotExist:
            info = Information.objects.create(**validated_data)
                
        return info
