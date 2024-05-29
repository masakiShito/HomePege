from django.db import models
from .profile import Profile

# Projectモデルを定義します
class Project(models.Model):
    # プロフィールを保存するフィールド
    # Profileモデルとの外部キー関係
    # プロフィールが削除された場合、対応するプロジェクトも削除されます
    profile = models.ForeignKey(Profile, related_name='projects', on_delete=models.CASCADE)
    
    # プロジェクト名を保存するフィールド
    # 最大100文字
    name = models.CharField(max_length=100)
    
    # プロジェクトの説明を保存するフィールド
    description = models.TextField()
    
    # 各フェーズの詳細を文字列で保持するフィールド
    phases = models.TextField()
    
    # 職位を保存するフィールド
    # 最大100文字
    position = models.CharField(max_length=100)
    
    # 開始日を保存するフィールド
    start_date = models.DateField()
    
    # 終了日を保存するフィールド
    # 空白やNULLを許可
    end_date = models.DateField(blank=True, null=True)

    # モデルのインスタンスが文字列として表現された時に、プロジェクト名を返します
    def __str__(self):
        return self.name
