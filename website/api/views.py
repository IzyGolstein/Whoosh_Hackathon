from django.shortcuts import render
from rest_framework import viewsets, status, generics, views
from rest_framework.response import Response
from django.http import HttpResponseRedirect, JsonResponse

from .serializers import RouteBuildSerializer
from geopy.geocoders import Nominatim
from drf_yasg.utils import swagger_auto_schema
geolocator = Nominatim(user_agent="my_geocoder")
from .ml_work import liner_short, liner_conv, liner_fast

def getCoordinates(address):
    # Define the address for which you want to get the coordinates

    # Geocode the address
    location = geolocator.geocode(address)

    # Extract the latitude and longitude from the location object
    if location is not None:
        return (location.longitude, location.latitude)
    else:
        return None


class RouteConstruct(generics.GenericAPIView):
    serializer_class = RouteBuildSerializer

    @swagger_auto_schema(
        responses={
            200: "Success",
            400: "Bad Request",
            404: "Not Found",
            500: "Internal Server Error"
        }
    )
    def post(self, request):
        data = request.data.copy()
        # print(data)
        p_from, p_to = data.get('point_from'), data.get('point_to')
        p_from = getCoordinates(p_from)
        print(p_from)
        if p_from is not None:
            data['point_from'] = p_from
        else:
            return Response({'errors': {'Откуда':'Введите правильный адрес точки начала маршрута'}}, status=status.HTTP_404_NOT_FOUND)
        p_to = getCoordinates(p_to)
        print(p_to)
        if p_to is not None:
            data['point_to'] = p_to
        else:
            return Response({'errors': {'Куда':'Введите правильный адрес точки конца маршрута'}}, status=status.HTTP_404_NOT_FOUND)
        road = [liner_short(p_from, p_to)[0], liner_conv(p_from, p_to)[0], liner_fast(p_from, p_to)[0]]  #shortest, convenient, fastests 
        data['road'] = road
        # print(data, type(road), 'DATA IS HEEEREREERE')
        serializer = self.serializer_class(data=data)
        if not serializer.is_valid():
            errors = serializer.errors
            print(errors)
            return Response({'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        # serializer.is_valid(raise_exception=True)
        # serializer.save() – вызываем функцию для построения оптимальных маршрутов
        waypoints = serializer.validated_data.get('waypoints')
        return Response(serializer.data, status=status.HTTP_200_OK)


def index(request):
    return render(request, "index.html")

def showMap(request):
    return render(request, "mapShow.html")