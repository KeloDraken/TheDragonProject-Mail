# Generated by Django 4.1 on 2022-08-12 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="object_id",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]