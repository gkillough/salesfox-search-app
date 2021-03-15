import requests

from .bing_env_config import BING_API_KEY
from ..location import location_search_api_client

BING_WEB_SEARCH_URL = "https://api.bing.microsoft.com/v7.0/search"
BING_NEWS_SEARCH_URL = "https://api.bing.microsoft.com/v7.0/news/search"


def create_bing_location_header_value(latitude, longitude, radius_meters=1000):
    return f"lat:{latitude};long={longitude};re:{radius_meters}"


class BingSearchClient:
    def __init__(self, base_url):
        self.base_url = base_url

    def execute_search_request(self, search_term, zip_code=None, max_results=10, additional_params=None):
        if additional_params is None:
            additional_params = {}

        headers = {
            "Ocp-Apim-Subscription-Key": BING_API_KEY
        }

        if zip_code is not None:
            lat_and_long = location_search_api_client.find_first_lat_and_long(zip_code)
            if lat_and_long is not None:
                latitude = lat_and_long.get(location_search_api_client.KEY_LATITUDE)
                longitude = lat_and_long.get(location_search_api_client.KEY_LONGITUDE)
                headers["X-Search-Location"] = create_bing_location_header_value(latitude, longitude)

        params = {
            "q": search_term,
            "count": max_results,
            "safeSearch": "Strict",
            "cc": "US"
        }

        if additional_params:
            params = params | additional_params

        response = requests.get(url=self.base_url, params=params, headers=headers)
        return response.json()
