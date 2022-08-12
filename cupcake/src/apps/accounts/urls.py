from allauth.socialaccount.providers.google import views as github_views
from django.urls import path, include
from apps.accounts.views import google_login, github_callback

app_name = "accounts"

urlpatterns = [
    path("login/", google_login, name="google_login"),
    path('auth/google/', github_callback, name='github_callback'),
    path('auth/google/url/', github_views.oauth2_login)
]
