from ipaddress import IPv4Address
from django.core.exceptions import ValidationError
from django.utils.deconstruct import deconstructible
from django.utils.translation import gettext_lazy as _

from validate_email import validate_email


@deconstructible
class UnicodeEmailValidator:
    def __call__(self, value: str):
        """
        Validate that the input contains (or does *not* contain, if
        inverse_match is True) a match for the regular expression.
        """
        is_valid = validate_email(
            email_address=value,
            check_format=True,
            check_blacklist=True,
            check_dns=True,
            dns_timeout=10,
            check_smtp=True,
            smtp_timeout=10,
            smtp_helo_host="smtp.gmail.com",
            smtp_from_address="jmama021@student.wethinkcode.co.za",
            smtp_skip_tls=False,
            smtp_tls_context=None,
            smtp_debug=False,
            address_types=frozenset([IPv4Address, IPv4Address]),
        )
        if not is_valid:
            message = _("Enter a valid Gmail email address.")
            raise ValidationError(message, params={"value": value})
