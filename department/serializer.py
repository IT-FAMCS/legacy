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
        links_data = validated_data.pop('links', [])
        depart_name = validated_data.get('short_name')

        try:
            department = Department.objects.get(short_name=depart_name)
            for key, value in validated_data.items():
                setattr(department, key, value)
            department.save()

            for link_data in links_data:
                link, created = Links.objects.update_or_create(department=department, **link_data)
        except Department.DoesNotExist:
            department = Department.objects.create(**validated_data)
            for link_data in links_data:
                Links.objects.create(department=department, **link_data)
                
        return department