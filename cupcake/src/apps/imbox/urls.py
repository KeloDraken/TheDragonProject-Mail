from django.urls import path
from apps.imbox.views import get_imbox

app_name = "imbox"

urlpatterns = [
    path("imbox/", get_imbox, name="imbox")
]