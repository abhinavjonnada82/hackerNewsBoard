from django.db import models


class Hackernewboard(models.Model):
    by = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    url = models.TextField()
    score = models.IntegerField()

    def _str_(self):
        return self.title
