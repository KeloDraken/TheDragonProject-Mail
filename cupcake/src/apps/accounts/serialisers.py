from rest_framework import serializers
from apps.accounts.models import User


class CreateUserSerialiser(serializers.ModelSerializer):
    @classmethod
    def create(cls, validated_data):
        password = validated_data.pop("password")
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

    class Meta:
        model = User
        fields = (
            "username",
            "password",
        )


class UserSerialiser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "object_id",
            "username",
            "profile_pic",
            "cover_pic",
            "display_name",
            "bio",
            "is_verified",
            "has_imported",
            "app_password",
        )

