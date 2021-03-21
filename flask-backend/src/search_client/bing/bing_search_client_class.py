import requests

from .bing_env_config import BING_API_KEY
from ..location import location_search_api_client

BING_WEB_SEARCH_URL = "https://api.bing.microsoft.com/v7.0/search"
BING_WEB_SEARCH_RESPONSES_PATH = ["webPages", "value"]
BING_WEB_SEARCH_SCHEMA = {
    "title": "name",
    "description": "snippet",
    "link": "url"
}

BING_NEWS_SEARCH_URL = "https://api.bing.microsoft.com/v7.0/news/search"
BING_NEWS_SEARCH_RESPONSES_PATH = ["value"]
BING_NEWS_SEARCH_SCHEMA = {
    "title": "name",
    "description": "description",
    "link": "url"
}


def create_bing_location_header_value(latitude, longitude, radius_meters=1000):
    return f"lat:{latitude};long={longitude};re:{radius_meters}"


class BingSearchClient:
    def __init__(self, base_url, responses_path=None, schema=None):
        self.base_url = base_url
        self.bing_responses_path = responses_path if responses_path else []
        self.schema = schema if schema else {}

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

        print(additional_params)
        if additional_params:
            params = params | additional_params

        response = requests.get(url=self.base_url, params=params, headers=headers)
        return response.json()

    def extract_results_list_from_response(self, bing_search_response):
        results = bing_search_response
        for response_path_key in self.bing_responses_path:
            results = results.get(response_path_key)
            if results is None:
                return []
        return results


BING_WEB_SEARCH_CLIENT = BingSearchClient(
    BING_WEB_SEARCH_URL,
    BING_WEB_SEARCH_RESPONSES_PATH,
    BING_WEB_SEARCH_SCHEMA
)
BING_NEWS_SEARCH_CLIENT = BingSearchClient(
    BING_NEWS_SEARCH_URL,
    BING_NEWS_SEARCH_RESPONSES_PATH,
    BING_NEWS_SEARCH_SCHEMA
)
