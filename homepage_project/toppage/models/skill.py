from django.db import models
from .profile import Profile

class Skill(models.Model):
    profile = models.ForeignKey(Profile, related_name='skills', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    level = models.IntegerField()

    def __str__(self):
        return f'{self.name} ({self.level})'
