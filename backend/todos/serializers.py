from rest_framework import serializers
from .models import Todo

from django.contrib.auth.models import User  # ← নতুন import
from rest_framework import serializers

# তোমার আগের TodoSerializer এখানে আছেই
# নিচে নতুন এটা যোগ করো ↓

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # password response-এ আসবে না

    class Meta:
        model = User
        fields = ['username', 'password', 'email']

    def create(self, validated_data):
        user = User.objects.create_user(   # plain text password hash করে save করে
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data.get('email', '')
        )
        return user
        

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['id', 'title', 'completed', 'created_at']