from django.contrib.auth.models import User
from rest_framework.test import APITestCase, APIClient, force_authenticate, APIRequestFactory
from django.test.client import encode_multipart, RequestFactory
from rest_framework import status
from .views import *

'''
class UserAuth(APIView):
    def post(self, request, format=None):
        if request.user.is_authenticated:
            return Response({'error': 'User already logged in'}, status=status.HTTP_400_BAD_REQUEST)
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            dj_login(request, user)
            return Response({'success': 'User logged in'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Wrong credentials'}, status=status.HTTP_400_BAD_REQUEST)
'''

#Write test for code above
class UserAuthTest(APITestCase):
    user = User.objects.get(username='nopass')
    factory = APIRequestFactory()
    view = UserAuth.as_view()

    def test_post_success(self):
        #create request
        request = self.factory.post('/api/users/auth/', {'username': 'nopass', 'password': 'Glanasz09_'})
        #get response
        response = self.view(request)
        #check if response is valid
        self.assertEqual(response.status_code, 200)
        #check if user is logged in
        self.assertEqual(response.data['success'], 'User logged in')

    def test_post_fail(self):
        #create request
        request = self.factory.post('/api/users/auth/', {'username': 'nopass', 'password': 'awewae'})
        #get response
        response = self.view(request)
        #check if response is valid
        self.assertEqual(response.status_code, 400)
        #check if user is logged in
        self.assertEqual(response.data['error'], 'Wrong credentials')

    def test_post_fail_already_logged_in(self):
        #login user
        force_authenticate(request, user=self.user)
        #create request
        request = self.factory.post('/api/users/auth/', {'username': 'nopass', 'password': 'Glanasz09_'})
        #get response
        response = self.view(request)
        #check if response is valid
        self.assertEqual(response.status_code, 400)
        #check if user is logged in
        self.assertEqual(response.data['error'], 'User already logged in')