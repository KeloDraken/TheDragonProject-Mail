from rest_framework import serializers
from apps.imbox.models import Message


class MessageSerialiser(serializers.ModelSerializer):
    from_user = serializers.SerializerMethodField()

    def get_from_user(self, msg):
        return {
            "id": msg.from_user.id,
            "fullname": msg.from_user.fullname,
        }

    class Meta:
        model = Message
        fields = (
            "id",
            "from_user",
            "to_users",
            "subject",
            "body",
        )
