import email
import smtplib
from typing import Dict, List

from imapclient import IMAPClient


def _get_messages(server, messages):
    _messages: List[Dict[str, str]] = list()
    for uid, message_data in server.fetch(messages, "RFC822").items():
        message: Dict[str, str] = dict()
        email_message = email.message_from_bytes(message_data[b"RFC822"])

        message["uid"] = uid
        message["from"] = email_message.get("From")
        message["subject"] = email_message.get("Subject")
        message["body"] = "Not the real email body"

        _messages.append(message)

    return _messages


def read_email(username, password):
    with IMAPClient("imap.gmail.com") as server:
        server.login(username, password)
        server.select_folder("INBOX", readonly=True)

        messages = server.search("UNSEEN")
        _messages = _get_messages(server, messages)
    return _messages


def send_email():
    sender = "joymama078@gmail.com"
    receivers = ["jmama021@student.wethinkcode.co.za"]

    message = """From: From Person <from@fromdomain.com>
    To: To Person <to@todomain.com>
    Subject: SMTP e-mail test

    This is a test e-mail message.
    """
    smtpObj = smtplib.SMTP_SSL("smtp.gmail.com")
    smtpObj.login(sender, "brdaieqidsbfujvo")
    smtpObj.sendmail(sender, receivers, message)
    print("Successfully sent email")
