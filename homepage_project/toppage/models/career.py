from django.db import models
from .profile import Profile

class Career(models.Model):
    profile = models.ForeignKey(Profile, related_name='careers', on_delete=models.CASCADE)
    company = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    description = models.TextField()

    def __str__(self):
        return f'{self.company} - {self.position}'
