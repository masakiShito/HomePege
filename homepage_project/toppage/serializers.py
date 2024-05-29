from rest_framework import serializers
from .models import Profile, BlogPost, Skill, Career, Project

# BlogPostモデルのシリアライザを定義します
class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        # すべてのフィールドをシリアライズ対象に設定します
        fields = '__all__'

# Skillモデルのシリアライザを定義します
class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        # すべてのフィールドをシリアライズ対象に設定します
        fields = '__all__'

# Careerモデルのシリアライザを定義します
class CareerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Career
        # すべてのフィールドをシリアライズ対象に設定します
        fields = '__all__'

# Projectモデルのシリアライザを定義します
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        # すべてのフィールドをシリアライズ対象に設定します
        fields = '__all__'

# Profileモデルのシリアライザを定義します
class ProfileSerializer(serializers.ModelSerializer):
    # Skillモデルをネストしてシリアライズします
    skills = SkillSerializer(many=True, read_only=True)
    # Careerモデルをネストしてシリアライズします
    careers = CareerSerializer(many=True, read_only=True)
    # Projectモデルをネストしてシリアライズします
    projects = ProjectSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        # すべてのフィールドをシリアライズ対象に設定します
        fields = '__all__'
