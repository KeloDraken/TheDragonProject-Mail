from django.urls import path
from apps.imbox.views import get_imbox, import_inbox

app_name = "imbox"

urlpatterns = [
    path("imbox/", get_imbox, name="imbox"),
    path("import/", import_inbox, name="import")
]