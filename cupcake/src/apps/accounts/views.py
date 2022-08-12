import urllib.parse

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from apps.accounts.models import User
from apps.accounts.serialisers import CreateUserSerialiser
from dj_rest_auth.registration.views import SocialLoginView
from django.shortcuts import redirect
from django.urls import reverse
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework_jwt.settings import api_settings


class CreateUserAPIView(CreateAPIView):
    """
    Creates new `User` instance associated with `request.user`
    """

    serializer_class = CreateUserSerialiser

    def login_user_after_register(self, username: str):
        """
        Logs in user after registration
        """
        user = User.objects.get(username=username.lower())
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        payload = jwt_payload_handler(user)
        return jwt_encode_handler(payload)

    def post(self, request: Request, *args, **kwargs):
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


def github_callback(request):
    params = urllib.parse.urlencode(request.GET)
    return redirect(f"http://localhost:8080/auth/google?{params}")


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = "http://127.0.0.1:8000/auth/google/callback"
    client_class = OAuth2Client

    def get_serializer(self, *args, **kwargs):
        serializer_class = self.get_serializer_class()
        kwargs["context"] = self.get_serializer_context()
        return serializer_class(*args, **kwargs)

    @property
    def callback_url(self):
        # use the same callback url as defined in your GitHub app, this url
        # must be absolute:
        return self.request.build_absolute_uri(reverse("google_callback"))


google_login = GoogleLogin.as_view()
