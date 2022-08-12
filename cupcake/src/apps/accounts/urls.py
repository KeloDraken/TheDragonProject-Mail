from django.urls import path
from apps.accounts.views import user_registration

app_name = "accounts"

urlpatterns = [
    path("registration/", user_registration, name="user_registration"),
]
