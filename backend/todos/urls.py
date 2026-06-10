from django.urls import path
from .views import*

urlpatterns = [
    path('todos/', TodoListCreateView.as_view()), # GET, POST
    path('todos/<int:pk>/', TodoDetailView.as_view())# PUT, DELETE
]