from django.shortcuts import render
from django.http import HttpResponse
import smtplib, ssl
import os

# def product_create_view(request):
#     form = ContactForm(request.POST or None)
#
#     context = {
#         'object': obj
#     }

# noinspection PyInterpreter
def home(request):
    if request.method == 'GET':
        # noinspection PyInterpreter
        return render(request, 'portfolio/index.html')
    else:
        port = 465  # For SSL
        password = os.environ.get('SENDER_PASSWORD')
        sender_email = os.environ.get('SENDER_EMAIL')
        receiver_email = os.environ.get('MY_EMAIL')
        message = "Name/Company is >" + request.POST['one'] + "\n Email to get back to is> " +"'"+ request.POST['two']+"'" +"\n And their message is> "+ request.POST['three']+"\n"
        message = "From: Kaori Miyazono\n" + message + "\n \n I like this world.  It's not perfect, but everything I love now is in it. \n Kaori Miyazono \n \n \n"

        # Create a secure SSL context
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
            server.login(sender_email, password)
            server.sendmail(sender_email, receiver_email, message)
            server.quit()
        return render(request, 'portfolio/index.html')

def resume(request):
    return render(request, 'portfolio/resume.html')

# Create your views here.
