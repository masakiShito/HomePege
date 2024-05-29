from django.db import models
from .profile import Profile

# Skillモデルを定義します
class Skill(models.Model):
    # プロフィールを保存するフィールド
    # Profileモデルとの外部キー関係
    # プロフィールが削除された場合、対応するスキルも削除されます
    profile = models.ForeignKey(Profile, related_name='skills', on_delete=models.CASCADE)
    
    # スキル名を保存するフィールド
    # 最大100文字
    name = models.CharField(max_length=100)
    
    # スキルレベルを保存するフィールド
    level = models.IntegerField()

    # モデルのインスタンスが文字列として表現された時に、スキル名とレベルを返します
    def __str__(self):
        return f'{self.name} ({self.level})'
