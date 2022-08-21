from django.shortcuts import render
from django.http import HttpRequest, HttpResponse

from libs.email import send_email


def get_imbox(request: HttpRequest) -> HttpResponse:
    send_email()
    return HttpResponse("done")
