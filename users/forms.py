from django.db import models
from django.db.models import fields
from django.forms import ModelForm, forms
from .models import (Documents, Profile,
                     Student,
                     ParentDetails,
                     ContactDetails,
                     AdditionalDetails)
from django.forms.widgets import DateInput


class SignupForm(ModelForm):
    
    class Meta:
        model = Profile
        fields = ['phone_number']

    def signup(self, request, user):
        user.profile.phone_number = self.cleaned_data['phone_number']
        user.profile.save()



class StudentFrom(ModelForm):
    class Meta:
        model = Student
        exclude = ['user', 'create_at']
        widgets = {
            'DOB': DateInput(attrs={'type': 'date'})
        }

    def __init__(self, *args, **kwargs):
        super(StudentFrom, self).__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs['class'] = 'form-control'


class DocumentsFrom(ModelForm):
    class Meta:
        model = Documents
        exclude = ['user', 'create_at']

    def __init__(self, *args, **kwargs):
        super(DocumentsFrom, self).__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs['class'] = 'form-control pb-4'


class ParentDetailsFrom(ModelForm):
    class Meta:
        model = ParentDetails
        exclude = ['user', 'create_at']
        widgets = {
            'father_dob': DateInput(attrs={'type': 'date'}),
            'mother_dob': DateInput(attrs={'type': 'date'})
        }

    def __init__(self, *args, **kwargs):
        super(ParentDetailsFrom, self).__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs['class'] = 'form-control'


class ContactDetailsFrom(ModelForm):
    class Meta:
        model = ContactDetails
        exclude = ['user', 'create_at']

    def __init__(self, *args, **kwargs):
        super(ContactDetailsFrom, self).__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs['class'] = 'form-control'


class AdditionalDetailsFrom(ModelForm):
    class Meta:
        model = AdditionalDetails
        exclude = ['user', 'create_at']

    def __init__(self, *args, **kwargs):
        super(AdditionalDetailsFrom, self).__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs['class'] = 'form-control'
