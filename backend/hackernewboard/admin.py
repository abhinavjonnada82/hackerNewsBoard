from django.contrib import admin
from .models import Hackernewboard  # add this


class HackernewboardAdmin(admin.ModelAdmin):  # add this
    list_display = ('by', 'title', 'url', 'score')  # add this


    # Register your models here.
admin.site.register(Hackernewboard, HackernewboardAdmin)  # add this
