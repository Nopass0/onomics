import datetime

def nowYear(request):
    return {'nowYear': datetime.datetime.now().year}