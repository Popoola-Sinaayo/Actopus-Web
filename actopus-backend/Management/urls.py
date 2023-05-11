from django.urls import path
from .views import ArticleView, AllArticlesView

urlpatterns = [
    path('add', ArticleView.as_view()),
    path('<int:id>', ArticleView.as_view()),
    path("all", AllArticlesView.as_view())
]
