"""
Project URLs
"""
from django.contrib import admin
from django.contrib.auth.models import Group

from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("allauth.urls")),
    path("accounts/", include("apps.accounts.urls", namespace="accounts")),
]

admin.site.site_header = "KeloDraken Mail Admin"
admin.site.site_title = "KeloDraken Mail Admin"
admin.site.unregister(Group)
