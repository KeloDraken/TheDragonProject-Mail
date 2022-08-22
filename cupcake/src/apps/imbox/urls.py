from django.urls import path
from apps.imbox.views import get_imbox, import_inbox, get_message

app_name = "imbox"

urlpatterns = [
    path("imbox/", get_imbox, name="imbox"),
    path("import/", import_inbox, name="import"),
    path("get/<object_id>/", get_message, name="get_message"),
]