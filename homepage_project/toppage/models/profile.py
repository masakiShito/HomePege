from django.db import models
from django.contrib.auth.models import User
import datetime

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(verbose_name="自己紹介", default="自己紹介を入力してください。")
    profile_picture = models.ImageField(upload_to='profile_pictures/', verbose_name="プロフィール画像", blank=True, null=True)
    website = models.URLField(blank=True, null=True, verbose_name="ウェブサイト")
    social_links = models.JSONField(blank=True, null=True, verbose_name="ソーシャルリンク")
    interests = models.TextField(verbose_name="趣味・興味", default="未設定")

    def __str__(self):
        return self.user.username
