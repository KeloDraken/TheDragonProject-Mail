from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView


from apps.imbox.models import Message, EmailAddress
from apps.imbox.serialisers import Message, MessageSerialiser

from libs.email import read_email


class ReadImbox(ListAPIView):
    serializer_class = MessageSerialiser

    def get_queryset(self):
        return Message.objects.filter(
            to_users__icontains=self.request.user.username
        ).order_by("-received_datetime")

    def task_get_inbox(self, request):
        messages = read_email(request.user.username, request.user.app_password)
        data = self.insert_msg_into_db(request, messages)
        return Response(status=status.HTTP_200_OK, data=data)

    def insert_msg_into_db(self, request, messages):
        for message in messages:
            from_user, created = EmailAddress.objects.get_or_create(
                fullname=message.get("from")
            )
            obj, created = Message.objects.get_or_create(
                msg_uid=message.get("uid"),
                from_user=from_user,
                to_users=str([request.user.username]),
                subject=message.get("subject"),
                body=message.get("body"),
            )
        return {"data": "done"}


get_imbox = ReadImbox.as_view()
