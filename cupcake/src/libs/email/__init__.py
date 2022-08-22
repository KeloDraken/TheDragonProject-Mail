import email
from email.header import Header, decode_header, make_header
from email.message import Message

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

def _get_messages(server, messages):
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


if __name__ == "__main__":
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


    with IMAPClient("imap.gmail.com") as server:
        server.login("joymama078@gmail.com", "yhxshpkjytxdcmng")
        server.select_folder("INBOX", readonly=True)
        messages = server.search("UNSEEN")
        for uid, message_data in server.fetch(messages, "RFC822").items():
            message: Dict[str, str] = dict()
            email_message = email.message_from_bytes(message_data[b"RFC822"])
            print(email_to_html(email_message))

            break

    # import imaplib
    # import email
    # import webbrowser
    # import tempfile
    # import webbrowser



    # # Login
    # imap = imaplib.IMAP4_SSL("imap.gmail.com")  
    # result = imap.login("joymama078@gmail.com", "yhxshpkjytxdcmng")

    # # Select the inbox, grab only the unseen emails
    # status, resp = imap.select('INBOX', readonly=True)
    # status, response = imap.search(None, '(UNSEEN)')
    # unread_msg_nums = response[0].split()

    # email_bodies = []
    # for idx in unread_msg_nums:
    #     _, msg = imap.fetch(str(int(idx)), "(RFC822)")
    #     for response in msg:
    #         if isinstance(response, tuple):
    #             raw_email = response[1]
    #             parsed = email.message_from_bytes(raw_email)
    #             email_bodies.append(email_to_html(parsed))

    #     break

    # # If you want to view/check the emails in your browser
    # def display(html):
    #     with tempfile.NamedTemporaryFile('w', delete=False, suffix='.html') as f:
    #         url = 'file://' + f.name
    #         f.write(html)
    #         webbrowser.open(url)


    # for body in email_bodies:
    #     display(body)