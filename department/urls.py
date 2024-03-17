from django.urls import path
import views

urlpatterns = [
    path('/', views.DepartmentList.as_view(), name='department-list'),
    path('<str:short_title>/detail', views.DepartmentDetailView.as_view(), name='department-detail'),
    path('create-department/', views.DepartmentCreate.as_view(), name='department-create'),
]