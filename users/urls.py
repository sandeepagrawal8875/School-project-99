from django.urls import path
from .views import RegisterStudent, home, UpdateRegisterStudent

urlpatterns = [
    path('', home, name='home'),
    path('RegisterStudent', RegisterStudent, name='RegisterStudent'),
    path('Update', UpdateRegisterStudent, name='Update'),
]
