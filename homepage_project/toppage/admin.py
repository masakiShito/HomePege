# myapp/admin.py
from django.contrib import admin
from .models import Profile, BlogPost, Skill, Career, Project

admin.site.register(Profile)
admin.site.register(BlogPost)
admin.site.register(Skill)
admin.site.register(Career)
admin.site.register(Project)