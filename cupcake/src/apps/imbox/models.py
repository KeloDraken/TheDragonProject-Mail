from datetime import datetime
import re

from django.db import models
from django.db.models.signals import post_save

from libs.utils.helpers import object_id_generator


class EmailAddress(models.Model):
    object_id: str = models.CharField(max_length=50, null=True, blank=True)

    IMBOX_CHOICES = (
        (
            "IMBOX",
            "IMBOX",
        ),
        (
            "FEED",
            "FEED",
        ),
        (
            "PAPERTRAIL",
            "PAPERTRAIL",
        ),
    )
    email_address: str = models.CharField(max_length=255, null=True, blank=True)
    profile_pic: str = models.CharField(max_length=255, null=True, blank=True)
    bio: str = models.CharField(max_length=255, null=True, blank=True)
    fullname: str = models.CharField(max_length=255, null=True, blank=True)
    nickname: str = models.CharField(max_length=255, null=True, blank=True)
    screed_in: bool = models.BooleanField(default=True, null=False, blank=False)
    inbox: bool = models.CharField(
        choices=IMBOX_CHOICES, max_length=255, null=False, blank=False, default="IMBOX"
    )

    def __str__(self):
        return self.email_address


def get_email_tld(email: str) -> str:
    domain = re.search("@[\w.]+", email)
    return domain.group().split("@")[1]


def asign_id_and_pic_on_created(sender, **kwargs):
    if kwargs["created"]:
        email: EmailAddress = kwargs["instance"]
        email.object_id = object_id_generator(30, EmailAddress)
        email.profile_pic = f"https://ui-avatars.com/api/?size=128&name={get_email_tld(email.email_address)}"
        email.save()


post_save.connect(asign_id_and_pic_on_created, sender=EmailAddress)


class Message(models.Model):
    object_id: str = models.CharField(max_length=50, null=True, blank=True)

    msg_uid = models.CharField(max_length=3000000, blank=True, null=True)

    from_user: EmailAddress = models.ForeignKey(
        to=EmailAddress,
        related_name="from_user",
        on_delete=models.CASCADE,
        null=False,
        blank=True,
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


def asign_object_id_on_message_created(sender, **kwargs):
    if kwargs["created"]:
        message: Message = kwargs["instance"]
        message.object_id = object_id_generator(30, Message)
        message.save()


post_save.connect(asign_object_id_on_message_created, sender=Message)
