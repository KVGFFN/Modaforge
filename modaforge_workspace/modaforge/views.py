from django.shortcuts import render

# Create your views here.
def index(request):
    my_dict = {"insert_me": "Hello, I am from views.py!"}
    return render(request, "index.html", context=my_dict)