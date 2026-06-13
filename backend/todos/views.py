from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated  # ← নতুন
from .models import Todo
from .serializers import TodoSerializer, RegisterSerializer


class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message': 'Registration successful!'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TodoListCreateView(APIView):
    permission_classes = [IsAuthenticated]  # ← নতুন: Login ছাড়া access নেই

    def get(self, request):
        # সব todos না, শুধু এই user এর todos
        todos = Todo.objects.filter(user=request.user).order_by('-created_at')
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)  # ← automatically user save হবে
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TodoDetailView(APIView):
    permission_classes = [IsAuthenticated]  # ← নতুন

    def get_object(self, pk, user):
        try:
            return Todo.objects.get(pk=pk, user=user)  # ← শুধু এই user এর todo
        except Todo.DoesNotExist:
            return None

    def put(self, request, pk):
        todo = self.get_object(pk, request.user)
        if todo is None:
            return Response({'error': 'Todo পাওয়া যায়নি'}, status=status.HTTP_404_NOT_FOUND)
        serializer = TodoSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        todo = self.get_object(pk, request.user)
        if todo is None:
            return Response({'error': 'Todo পাওয়া যায়নি'}, status=status.HTTP_404_NOT_FOUND)
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)