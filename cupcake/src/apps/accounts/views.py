from typing import Any
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework_jwt.settings import api_settings

from apps.accounts.models import User
from apps.accounts.serialisers import CreateUserSerialiser, UserSerialiser


class CreateUserAPIView(CreateAPIView):
    """
    Creates new `User` instance associated with `request.user`
    """

    serializer_class = CreateUserSerialiser
    permission_classes = [AllowAny]

    def login_user_after_register(self, username: str) -> Any | list | None:
        """
        Logs in user after registration
        """
        user = User.objects.get(username=username.lower())
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        payload = jwt_payload_handler(user)
        return jwt_encode_handler(payload)

    def post(self, request: Request, *args, **kwargs) -> Response:
        """
        Handles post request
        """
        if request.user.is_authenticated:
            data = {"status_code": 403, "message": "You are already have an account"}
            return Response(data=data, status=status.HTTP_403_FORBIDDEN)

        serialiser = self.get_serializer(data=request.data)
        serialiser.is_valid(raise_exception=True)
        self.perform_create(serialiser)

        username: str = serialiser.data.get("username")
        token: str = self.login_user_after_register(username)
        data = {
            "token": token,
            "status_code": 201,
            "message": "Successfully created your account",
        }
        return Response(data=data, status=status.HTTP_201_CREATED)


registration = CreateUserAPIView.as_view()


class GetUserObjectID(APIView):
    def get(self, request: Request) -> Response:
        if not self.request.user.is_authenticated:
            data = {"status_code": 403, "message": "User logged out"}
            return Response(data=data, status=status.HTTP_200_OK)

        serialiser = UserSerialiser(request.user)
        return Response(serialiser.data)


get_user_id = GetUserObjectID.as_view()
