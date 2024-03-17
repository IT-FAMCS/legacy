from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('users/', include('users.urls')),
    path('', include('pages.urls')),
    path('departments/', include('departments.urls')), 
    path('information/', include('information.urls')),
    path('events/', include('events.urls')),
    path('admin/', admin.site.urls),   
]
