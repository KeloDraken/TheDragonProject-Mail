import imaplib
import pprint
from smtplib import SMTPException


def get_inbox(email: str, password: str) -> None:
    imap_host = "imap.gmail.com"
    imap_user = email
    imap_pass = password

    # connect to host using SSL
    imap = imaplib.IMAP4_SSL(imap_host)

    ## login to server
    imap.login(imap_user, imap_pass)

    imap.select("Inbox")

    tmp, data = imap.search(None, "ALL")
    for num in data[0].split():
        tmp, data = imap.fetch(num, "(RFC822)")
        print("Message: {0}\n".format(num))
        pprint.pprint(data[0][1])
        break
    imap.close()


def send_email():
    import smtplib

    sender = "joymama078@gmail.com"
    receivers = ["jmama021@student.wethinkcode.co.za"]

    message = """From: From Person <from@fromdomain.com>
    To: To Person <to@todomain.com>
    Subject: SMTP e-mail test

    This is a test e-mail message.
    """
    smtpObj = smtplib.SMTP_SSL('smtp.gmail.com')
    smtpObj.login(sender, "brdaieqidsbfujvo")
    smtpObj.sendmail(sender, receivers, message)
    print("Successfully sent email")
    # except SMTPException:
    #     print("Error: unable to send email")
