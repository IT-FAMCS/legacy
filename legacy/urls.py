from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('departments/', include('department.urls')),
    path('events/', include('events.urls')),
    path('users/', include('users.urls')),
]
