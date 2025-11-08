

# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    ROLE_CHOICES = (
        ('student', 'Student'),
        ('hod', 'HOD'),
        ('tpo', 'TPO'),
    )
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    department = models.CharField(max_length=100)
    resume = models.FileField(upload_to='resumes/', null=True, blank=True)

class PlacementDrive(models.Model):
    company_name = models.CharField(max_length=200)
    role = models.CharField(max_length=100)
    eligibility = models.CharField(max_length=100)
    date = models.DateField()

class Application(models.Model):
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE)
    drive = models.ForeignKey(PlacementDrive, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=(('applied','Applied'),('selected','Selected'),('rejected','Rejected')), default='applied')
    offer_letter = models.FileField(upload_to='offer_letters/', null=True, blank=True)
