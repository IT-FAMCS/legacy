from rest_framework import  serializers
from .models import Department, Links

class LinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Links
        fields = ['id', 'link', 'title']
        
    
class DepartmentSerializer(serializers.ModelSerializer):
    links = LinksSerializer(many=True)  
    
    class Meta:
        model = Department
        fields = '__all__'
    
    def create(self, validated_data):
        
        links_data = validated_data.pop('links', None)
        
        
        department = Department.objects.create(**validated_data)
        
        
        if links_data:
            for link_data in links_data:
                Links.objects.create(department=department, **link_data)
        
        return department
