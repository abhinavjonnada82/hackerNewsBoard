from rest_framework import serializers
from .models import Hackernewboard


class HackernewboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hackernewboard
        fields = ('by', 'title', 'url', 'score')
