from django.db import models
from django.contrib.auth.models import User

# BlogPostモデルを定義します
class BlogPost(models.Model):
    # タイトルを保存するフィールド
    # 最大200文字
    title = models.CharField(max_length=200)
    
    # コンテンツを保存するフィールド
    # テキスト形式
    content = models.TextField()
    
    # 著者を保存するフィールド
    # ユーザーとの外部キー関係
    # 著者が削除された場合、対応するブログポストも削除されます
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    
    # 作成日時を保存するフィールド
    # 初回作成時に自動で現在日時が設定されます
    created_at = models.DateTimeField(auto_now_add=True)
    
    # 更新日時を保存するフィールド
    # 更新のたびに自動で現在日時が設定されます
    updated_at = models.DateTimeField(auto_now=True)

    # モデルのインスタンスが文字列として表現された時に、タイトルを返します
    def __str__(self):
        return self.title
