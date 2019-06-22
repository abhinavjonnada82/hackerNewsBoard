from django.test import TestCase
from ..models import Hackernewboard
from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from ..serializers import HackernewboardSerializer

# test for models


class HackernewboardTest(TestCase):

    def setUp(self):
        Hackernewboard.objects.create(
            by="bruce", title="bat mobile 101", url="https://www.dccomics.com/characters/batman",
            score=999)
        Hackernewboard.objects.create(
            by="billy", title="shazam caps", url="https://www.dccomics.com/characters/shazam",
            score=434)

    def test_by_score(self):
        by_bruce = Hackernewboard.objects.get(by="bruce")
        by_billy = Hackernewboard.objects.get(by="billy")
        self.assertEqual(
            by_bruce.getScoreNBy(), "bruce holds score 999"
        )
        self.assertEqual(
            by_billy.getScoreNBy(), "billy holds score 434"
        )

# tests for views


class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_entry(title="", artist=""):
        if by != "" and title != "" and url != "" and score != "":
            Hackernewboard.objects.create(
                by=by, title=title, url=url, score=score)

    def setUp(self):
        # add test data
        self.create_entry(
            "bruce", "bat mobile 101", "https://www.dccomics.com/characters/batman",
            999)
        self.create_entry(
            "billy", "shazam capes", "https://www.dccomics.com/characters/shazam",
            834)
        self.create_entry(
            "clark", "superman flight", "https://www.dccomics.com/characters/superman",
            734)
        self.create_entry.save()
        # assert new entry was added
        self.assertEqual(Hackernewboard.objects.count(), 3)

        # assert a created status code was returned
        self.assertEqual(201, response.status_code)


class GetAllEntriessTest(BaseViewTest):

    def test_get_all_entries(self):
        """
        This test ensures that all entries added in the setUp method
        exist when we make a GET request to the api/hackernewboardlist endpoint
        """
        # hit the API endpoint
        response = self.client.get(reverse('hackernewboard'), format="json")

        # fetch the data from db
        expected = Hackernewboard.objects.all()
        serialized = HackernewboardSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
