from django.contrib.auth.models import AbstractUser

from django.db import models
from django.db.models.signals import post_save

from django.utils.translation import gettext_lazy as _

from libs.utils.helpers import object_id_generator
from apps.accounts.validators import UnicodeEmailValidator


class LowercaseCharField(models.CharField):
    """
    Override CharField to convert to lowercase before saving.
    """

    def to_python(self, value):
        """
        Convert text to lowercase.
        """
        value = super(LowercaseCharField, self).to_python(value)
        # Value can be None so check that it's a string before lowercasing.
        if isinstance(value, str):
            value = value.replace(" ", "_")
            return value.lower()
        return value


class User(AbstractUser):
    """
    Users, within the KeloDraken Mail authentication system, are represented by this
    model.
    """

    object_id: str = models.CharField(max_length=50, null=True, blank=True)
    is_fake_profile: bool = models.BooleanField(default=False)
    is_verified: bool = models.BooleanField(default=False)
    username: str = LowercaseCharField(
        # Copying this from AbstractUser code
        _("username"),
        max_length=300,
        unique=True,
        help_text=_(
            "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only."
        ),
        validators=[
            UnicodeEmailValidator(),
        ],
        error_messages={
            "unique": _("This email is not available, please try another one."),
        },
    )
    display_name: str = models.CharField(max_length=100, null=True, blank=True)
    profile_pic: str = models.CharField(max_length=3000, null=True, blank=True)
    cover_pic: str = models.CharField(max_length=3000, null=True, blank=True)
    bio: str = models.TextField(null=True, blank=True, max_length=300)
    has_imported: str = models.BooleanField(default=False)
    app_password: str = models.CharField(max_length=3000, null=True, blank=True)

    def __str__(self) -> str:
        return self.username
        

def asign_object_id_on_profile_created(sender, **kwargs):
    if kwargs["created"]:
        user: User = kwargs["instance"]
        user.object_id = object_id_generator(30, User)
        if user.email:
            user.username = user.email
        user.save()


post_save.connect(asign_object_id_on_profile_created, sender=User)
