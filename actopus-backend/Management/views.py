from functools import partial
from django.shortcuts import render
from rest_framework.response import Response
from .models import Article
from .serializers import ArticleSerializer
from rest_framework.views import APIView
from rest_framework import status
from django.utils.decorators import method_decorator
# Create your views here.


class ArticleView(APIView):

    # def get(self, request, *args, **kwargs):
    #     articles = Article.objects.all()
    #     articles_data = ArticleSerializer(articles, many=True)
    #     return Response((articles_data).data, status=status.HTTP_200_OK)

    def get(self, request, *args, **kwargs):
        article = Article.objects.filter(id=self.kwargs['id'])
        if article.exists():
            article = article[0]
            article_Data = ArticleSerializer(article)
            return Response(article_Data.data, status=status.HTTP_200_OK)
        return Response({'message': 'Article does not exist'}, status=status.HTTP_204_NO_CONTENT)

    def post(self, request, *args, **kwargs):
        article = request.data
        article_data = ArticleSerializer(data=article)
        if article_data.is_valid():
            article_data.save()
            return Response({'message': 'Article created successfully'}, status=status.HTTP_201_CREATED)
        return Response({'message': 'Error in article data, check and try again'}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, *args, **kwargs):
        article_details = request.data
        article = Article.objects.filter(id=self.kwargs['id'])
        if article.exists():
            article = article[0]
            serialized_article = ArticleSerializer(
                article, data=article_details)
            if serialized_article.is_valid():
                serialized_article.save()
                return Response({'message': 'Article update successfully'}, status=status.HTTP_200_OK)
        return Response({'message': 'Error in article data, check and try again'}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        articles = Article.objects.filter(id=self.kwargs['id'])
        if articles.exists():
            article = articles[0]
            article.delete()
            return Response({'message': 'Delete successful'}, status=status.HTTP_200_OK)
        return Response({'message': 'No matching title'}, status=status.HTTP_200_OK)


class AllArticlesView(APIView):
    def get(self, request, *args, **kwargs):
        article = Article.objects.all().order_by('-id')
        article_Data = ArticleSerializer(article, many=True)
        return Response(article_Data.data, status=status.HTTP_200_OK)
        # return Response({'message': 'Article does not exist'}, status=status.HTTP_204_NO_CONTENT)
