# Generated by Django 3.2.7 on 2021-10-08 04:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_owner_sitter'),
    ]

    operations = [
        migrations.AddField(
            model_name='pet',
            name='breed',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='pet',
            name='name',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='pet',
            name='species',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(default=None, max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='pet',
            name='owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.owner'),
        ),
    ]
