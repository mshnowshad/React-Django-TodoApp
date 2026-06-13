from django.db import models
from django.contrib.auth.models import User  # ← নতুন import

class Todo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='todos', null=True, blank=True)  # ← নতুন
    title = models.CharField(max_length=200, null=True, blank=True)
    completed = models.BooleanField(default=False, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    def __str__(self):
        return self.title