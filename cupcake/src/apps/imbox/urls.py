from django.urls import path
from apps.imbox.views import get_imbox

app_name = "imbox"

urlpatterns = [
    path("", get_imbox, name="imbox")
]