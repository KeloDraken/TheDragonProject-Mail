from typing import List
from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, ListCreateAPIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView

from django.shortcuts import get_object_or_404

from apps.accounts.models import User
from apps.accounts.serialisers import UserSerialiser
from libs.email import read_email

from apps.imbox.models import Message, EmailAddress
from apps.imbox.serialisers import Message, MessageSerialiser


class ReadImbox(ListAPIView):
    serializer_class = MessageSerialiser

    def get_queryset(self):
        return Message.objects.filter(
            to_users__icontains=self.request.user.username
        ).order_by("-received_datetime")


get_imbox = ReadImbox.as_view()


class ImportInbox(APIView):
    def put(self, request, *args, **kwargs):
        user = request.user
        serialiser = UserSerialiser(user, data=request.data)
        if serialiser.is_valid():
            serialiser.save()
            self.get_imbox(user)
            return Response(serialiser.data)
        return Response(serialiser.errors, status=status.HTTP_400_BAD_REQUEST)

    def get_imbox(self, user: User):
        messages = read_email(user.username, user.app_password)
        data = self.insert_msg_into_db(user, messages)
        user.has_imported = True
        user.save()
        return Response(status=status.HTTP_200_OK, data=data)

    def extract_email(self, string: str) -> List[str]:
        import re

        match = re.findall(r"[\w.+-]+@[\w-]+\.[\w.-]+", string)
        return match

    def insert_msg_into_db(self, user: User, messages):
        for message in messages:
            from_user, created = EmailAddress.objects.get_or_create(
                email_address=self.extract_email(message.get("from"))[0],
                fullname=message.get("from"),
            )
            obj, created = Message.objects.get_or_create(
                msg_uid=message.get("uid"),
                from_user=from_user,
                to_users=str([user.username]),
                subject=message.get("subject"),
                body=message.get("body"),
            )
        return {"data": "done"}


import_inbox = ImportInbox.as_view()


class GetEmailMessage(ListAPIView):
   serializer_class = MessageSerialiser

   def get_queryset(self):
      queryset = Message.objects.filter(object_id=self.kwargs['object_id'])
      return queryset
get_message = GetEmailMessage.as_view()
