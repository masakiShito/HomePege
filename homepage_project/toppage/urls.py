from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProfileViewSet, BlogPostViewSet, SkillViewSet, CareerViewSet, ProjectViewSet

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet)
router.register(r'blogposts', BlogPostViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'careers', CareerViewSet)
router.register(r'projects', ProjectViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
