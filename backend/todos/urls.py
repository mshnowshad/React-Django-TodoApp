from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import*

urlpatterns = [
    path('todos/', TodoListCreateView.as_view()), # GET, POST
    path('todos/<int:pk>/', TodoDetailView.as_view()),# PUT, DELETE

    #JWT
    path('auth/register/', RegisterView.as_view()),       # Register
    path('auth/login/', TokenObtainPairView.as_view()),   # Login (JWT built-in)
    path('auth/refresh/', TokenRefreshView.as_view()),    # Token Refresh (JWT built-i
]