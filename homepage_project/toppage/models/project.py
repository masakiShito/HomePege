from django.db import models
from .profile import Profile

class Project(models.Model):
    profile = models.ForeignKey(Profile, related_name='projects', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    phases = models.TextField()  # 各フェーズの詳細を文字列で保持
    position = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return self.name
