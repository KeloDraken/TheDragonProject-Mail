from allauth.socialaccount.providers.google import views as github_views
from django.urls import path
from apps.accounts.views import google_login

app_name = "accounts"

urlpatterns = [
    path("login/", google_login, name="google_login"),
    path('auth/google/url/', github_views.oauth2_login)
]
