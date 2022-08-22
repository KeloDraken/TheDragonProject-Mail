from typing import Sequence
from django.contrib import admin
from apps.imbox.models import Message, EmailAddress


class MessageAdmin(admin.ModelAdmin):
    search_fields: Sequence[str] = (
        "from_user__email_address",
        "object_id",
        "to_users",
        "subject",
        "body",
    )


admin.site.register(EmailAddress)
admin.site.register(Message, MessageAdmin)
