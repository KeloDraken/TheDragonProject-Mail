from django.urls import path
from apps.accounts.views import registration

app_name = "accounts"

urlpatterns = [
    path("auth/register/", registration, name="user_registration"),
]
