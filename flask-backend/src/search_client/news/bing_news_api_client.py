import requests
from ..location import location_search_api_client
from .news_env_config import BING_API_KEY

BING_NEWS_SEARCH_URL = "https://api.bing.microsoft.com/v7.0/news/search"

FRESHNESS_DAY = "Day"
FRESHNESS_WEEK = "Week"
FRESHNESS_MONTH = "Month"


def retrieve_news(search_term, zip_code=None, max_results=10, freshness=FRESHNESS_WEEK):
    headers = {
        "Ocp-Apim-Subscription-Key": BING_API_KEY
    }

    if zip_code is not None:
        lat_and_long = location_search_api_client.find_first_lat_and_long(zip_code)
        if lat_and_long is not None:
            latitude = lat_and_long.get(location_search_api_client.KEY_LATITUDE)
            longitude = lat_and_long.get(location_search_api_client.KEY_LONGITUDE)
            headers["X-Search-Location"] = create_location_header_value(latitude, longitude)

    params = {
        "q": search_term,
        "count": max_results,
        "freshness": freshness,
        "safeSearch": "Strict",
        "cc": "US"
    }
    response = requests.get(url=BING_NEWS_SEARCH_URL, params=params, headers=headers)
    return response.json()


def create_location_header_value(latitude, longitude, radius_meters=1000):
    return f"lat:{latitude};long={longitude};re:{radius_meters}"
