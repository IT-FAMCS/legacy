from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Information
from serializer import InfoSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Information.objects.all()
    serializer_class = InfoSerializer
    permission_classes = [IsAuthenticated]

    def perform_update(self, serializer):
        instance = self.get_object()
        serializer.save(instance=instance)
