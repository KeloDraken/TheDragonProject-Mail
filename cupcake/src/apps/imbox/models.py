from datetime import datetime
from django.db import models


class EmailAddress(models.Model):
    IMBOX_CHOICES = (
        ("IMBOX", "IMBOX",),
        ("FEED", "FEED",),
        ("PAPERTRAIL", "PAPERTRAIL",)
    )
    email_address: str = models.CharField(max_length=255, null=True, blank=True)
    profile_pic: str = models.CharField(max_length=255, null=True, blank=True)
    bio: str = models.CharField(max_length=255, null=True, blank=True)
    fullname: str = models.CharField(max_length=255, null=True, blank=True)
    nickname: str = models.CharField(max_length=255, null=True, blank=True)
    screed_in: bool = models.BooleanField(default=True, null=False, blank=False)
    inbox: bool = models.CharField(
        choices=IMBOX_CHOICES,
        max_length=255,
        null=False,
        blank=False,
        default="IMBOX"
    )


class Message(models.Model):
    msg_uid = models.CharField(max_length=3000000, blank=True, null=True)

    from_user: EmailAddress = models.ForeignKey(
        to=EmailAddress,
        related_name="from_user",
        on_delete=models.CASCADE,
        null=False,
        blank=True
    )
    to_users: str = models.TextField(null=False, blank=True)

    subject: str = models.CharField(null=False, blank=True, max_length=300)
    body: str = models.TextField(null=False, blank=False)

    received_datetime: datetime = models.DateTimeField(auto_now_add=True)
    sent_datetime: datetime = models.DateTimeField(auto_now_add=True)

    is_draft: bool = models.BooleanField(null=False, blank=False, default=False)
    is_sent: bool = models.BooleanField(null=False, blank=False, default=False)
    is_received: bool = models.BooleanField(null=False, blank=False, default=False)
    is_read: bool = models.BooleanField(null=False, blank=False, default=False)
    is_starred: bool = models.BooleanField(null=False, blank=False, default=False)
    is_trash: bool = models.BooleanField(null=False, blank=False, default=False)

    def __str__(self) -> str:
        return self.from_user.fullname
