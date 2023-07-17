from django.test import TestCase
from rest_framework.test import APIRequestFactory
from rest_framework.test import force_authenticate
from django.contrib.auth.models import User

from .views import CsrfTokenView

# Create your tests here.

factory = APIRequestFactory()
user = User.objects.get(username='nopass')

#get csrf token test
class CsrfTokenViewTest(TestCase):
    def test_get(self):
        #create request
        request = factory.get('/api/csrf_token')
        #get response
        response = CsrfTokenView.as_view()(request)
        #check if response is valid
        self.assertEqual(response.status_code, 200)

#get is user logged in test
# class IsUserLoggedInViewTest(TestCase):
#     def test_get(self):
#         #create request
#         request = factory.get('/api/is_user_logged_in')
#         #get response
#         response = CsrfTokenView.as_view()(request)
#         #check if response is valid
#         self.assertEqual(response.status_code, 200)
#         #check if response is false
#         self.assertEqual(response.data['is_user_logged_in'], False)
#         force_authenticate(request, user=user)
#         #get response
#         response = CsrfTokenView.as_view()(request)
#         #check if response is valid
#         self.assertEqual(response.status_code, 200)
#         #check if response is true
#         self.assertEqual(response.data['is_user_logged_in'], True)
#         #remove authentication
#         force_authenticate(request, user=None)