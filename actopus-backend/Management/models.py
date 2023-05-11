from django.db import models

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=60)
    content = models.TextField()
    creator = models.CharField(max_length=40)
    comment = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.title
