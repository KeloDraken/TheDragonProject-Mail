from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token

from apps.accounts.views import registration, get_user_id

app_name = "accounts"

urlpatterns = [
    path("auth/register/", registration, name="user_registration"),
    path("auth/login/", obtain_jwt_token, name="user_login"),
    path("object_id/", get_user_id, name="get_user_id"),
]
