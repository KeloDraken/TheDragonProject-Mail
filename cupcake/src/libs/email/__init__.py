import smtplib

import email

from imapclient import IMAPClient


def read_email(username, password):
    HOST = "imap.gmail.com"

    with IMAPClient(HOST) as server:
        server.login(username, password)
        server.select_folder("SENTBOX", readonly=True)

        messages = server.search("UNSEEN")
        for uid, message_data in server.fetch(messages, "RFC822").items():
            email_message = email.message_from_bytes(message_data[b"RFC822"])
            print(uid, email_message.get("From"), email_message.get("Subject"))


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
    read_email("joymama078@gmail.com", "brdaieqidsbfujvo")
