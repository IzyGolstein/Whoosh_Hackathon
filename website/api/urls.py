from django.urls import path, include

# from users.views import login, registration, profile, logout
from .views import RouteConstruct, index, showMap
# from .views import UserAuthViewSet, EmailVerificationView, SetNewPasswordAPIView, ProfileView, PasswordChangeView
from rest_framework.routers import DefaultRouter

app_name = 'api'
urlpatterns = [
   path('v1/route/', RouteConstruct.as_view(), name="route"),
   path('v1/map/', showMap, name='map'),
   path('v1/', index, name='index')
]