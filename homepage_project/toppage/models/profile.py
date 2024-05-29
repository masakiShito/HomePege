from django.db import models
from django.contrib.auth.models import User
import datetime

# Profileモデルを定義します
class Profile(models.Model):
    # ユーザーを保存するフィールド
    # Userモデルとの一対一の関係
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    # 自己紹介を保存するフィールド
    bio = models.TextField(verbose_name="自己紹介", default="自己紹介を入力してください")
    
    # プロフィール画像を保存するフィールド
    # 空白やNULLを許可
    profile_picture = models.ImageField(upload_to='profile_pictures/', verbose_name="プロフィール画像", blank=True, null=True)
    
    # ウェブサイトを保存するフィールド
    # 空白やNULLを許可
    website = models.URLField(blank=True, null=True, verbose_name="ウェブサイト")
    
    # ソーシャルリンクを保存するフィールド
    # JSON形式
    # 空白やNULLを許可
    social_links = models.JSONField(blank=True, null=True, verbose_name="ソーシャルリンク")
    
    # 趣味・興味を保存するフィールド
    interests = models.TextField(verbose_name="趣味・興味", default="未設定")

    # モデルのインスタンスが文字列として表現された時に、ユーザー名を返します
    def __str__(self):
        return self.user.username
