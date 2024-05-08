from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import Information
from .serializer import InfoSerializer
from rest_framework.response import Response

class InfoList(generics.ListAPIView):
    permission_classes = [IsAuthenticated, IsAdminUser]
    queryset = Information.objects.all()
    serializer_class = InfoSerializer


class InfoCreate(generics.CreateAPIView):
    permission_classes = [IsAuthenticated, IsAdminUser]
    queryset = Information.objects.all()
    serializer_class = InfoSerializer
    
class InfoUpdateView(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, IsAdminUser]
    queryset = Information.objects.all()
    serializer_class = InfoSerializer
    
    lookup_field = "short_title"

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)