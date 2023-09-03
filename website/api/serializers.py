from rest_framework import serializers
# from django.contrib.gis.db.models import PointField
import json, ast

class ArrayField(serializers.Field):
    def to_representation(self, value):
        return value
    
    def to_internal_value(self, data):
        return ast.literal_eval(str(data))


class RouteBuildSerializer(serializers.Serializer):
    point_from = serializers.ListField(
        child=serializers.ListField(
            child=serializers.FloatField()
        ), allow_empty=False,
        ) #start of route
    point_to = serializers.ListField(
        child=serializers.ListField(
            child=serializers.FloatField()
        ), allow_empty=False,
        ) #finish of route
    road = ArrayField(required=True)
    
    WAYPOINT_CHOICES = [
        ('', 'No waypoint'),
        ('SHOP', 'Shop'),
        ('SCHOOL', 'School'),
        ('PHARMACY', 'Pharmacy'),
    ]
    waypoints = serializers.MultipleChoiceField(choices=WAYPOINT_CHOICES) #waypoint variants
    # print(waypoints)

    def validate(self, attrs):
        return super().validate(attrs)