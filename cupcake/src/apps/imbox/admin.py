from django.contrib import admin
from apps.imbox.models import Message, EmailAddress

admin.site.register(EmailAddress)
admin.site.register(Message)
