from django.db import models
from .profile import Profile

# Careerモデルを定義します
class Career(models.Model):
    # プロフィールを保存するフィールド
    # Profileモデルとの外部キー関係
    # プロフィールが削除された場合、対応するキャリアも削除されます
    profile = models.ForeignKey(Profile, related_name='careers', on_delete=models.CASCADE)
    
    # 会社名を保存するフィールド
    # 最大100文字
    company = models.CharField(max_length=100)
    
    # 職位を保存するフィールド
    # 最大100文字
    position = models.CharField(max_length=100)
    
    # 開始日を保存するフィールド
    start_date = models.DateField()
    
    # 終了日を保存するフィールド
    # 空白やNULLを許可
    end_date = models.DateField(blank=True, null=True)
    
    # 職務内容を保存するフィールド
    description = models.TextField()

    # モデルのインスタンスが文字列として表現された時に、会社名と職位を返します
    def __str__(self):
        return f'{self.company} - {self.position}'
