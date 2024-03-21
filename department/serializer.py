from rest_framework import  serializers
from .models import Department, Links

class LinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Links
        fields = ['id', 'link', 'title']
class DepartmentSerializer(serializers.ModelSerializer):
    links = LinksSerializer(many = True)
    class Meta:
        model = Department
        fields = '__all__'