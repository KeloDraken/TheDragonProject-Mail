import email
from email.header import decode_header, make_header

import smtplib
from typing import Dict, List

from imapclient import IMAPClient


def email_to_html(parsed):
    all_parts = None
    for part in parsed.walk():
        if type(part.get_payload()) == list:
            for subpart in part.get_payload():
                all_parts = email_to_html(subpart)
        else:
            if encoding := part.get_content_charset():
                all_parts = part.get_payload(decode=True).decode(encoding)
    return all_parts


def get_messages(server: IMAPClient, messages) -> List[Dict[str, str]]:
    _messages: List[Dict[str, str]] = list()
    for uid, message_data in server.fetch(messages, "RFC822").items():
        message: Dict[str, str] = dict()
        email_message = email.message_from_bytes(message_data[b"RFC822"])

        message["uid"] = uid
        message["from"] = email_message.get("From")

        subject = make_header(decode_header(email_message.get("Subject")))
        message["subject"] = subject
        message["body"] = email_to_html(email_message)

        _messages.append(message)
        print("Imported", uid)
    return _messages


def read_email(username: str, password: str) -> List[Dict[str, str]]:
    with IMAPClient("imap.gmail.com") as server:
        server.login(username, password)
        server.select_folder("INBOX", readonly=True)

        messages = server.search("UNSEEN")
        _messages = get_messages(server, messages)
    return _messages


def send_email():
    sender = "dion@gmail.com"
    receivers = ["test@student.wethinkcode.co.za"]

    message = """From: From Person <from@fromdomain.com>
    To: To Person <to@todomain.com>
    Subject: SMTP e-mail test

    This is a test e-mail message.
    """
    smtpObj = smtplib.SMTP_SSL("smtp.mail.com")
    smtpObj.login(sender, "test")
    smtpObj.sendmail(sender, receivers, message)
    print("Successfully sent email")
