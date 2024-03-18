from rest_framework import  serializers
from .models import Department

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'short_title', 'title', 'description', 'structure', 'work', 'in_events', 'FAQ', 'links']
