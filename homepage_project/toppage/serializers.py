from rest_framework import serializers
from .models import Profile, BlogPost, Skill, Career, Project

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class CareerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Career
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    careers = CareerSerializer(many=True, read_only=True)
    projects = ProjectSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = '__all__'