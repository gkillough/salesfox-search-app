import requests
import location_search
from env_config import BING_API_KEY

BING_NEWS_SEARCH_URL = "https://api.bing.microsoft.com/v7.0/news/search"

FRESHNESS_DAY = "Day"
FRESHNESS_WEEK = "Week"
FRESHNESS_MONTH = "Month"


def retrieve_news(search_term, zip_code):
    print(f"A search for ['{search_term}'] was performed")
    bing_news = retrieve_bing_news(search_term, zip_code, 5)

    salesfox_news = []
    for news_item in bing_news.get("value"):
        salesfox_news_item = create_salesfox_news_item(news_item)
        salesfox_news.append(salesfox_news_item)

    return {
        "count": len(salesfox_news),
        "items": salesfox_news
    }


def retrieve_bing_news(search_term, zip_code=None, max_results=10, freshness=FRESHNESS_WEEK):
    headers = {
        "Ocp-Apim-Subscription-Key": BING_API_KEY
    }

    if zip_code is not None:
        lat_and_long = location_search.find_first_lat_and_long(zip_code)
        if lat_and_long is not None:
            latitude = lat_and_long.get(location_search.KEY_LATITUDE)
            longitude = lat_and_long.get(location_search.KEY_LONGITUDE)
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


def create_salesfox_news_item(external_news_item):
    news_item_providers = external_news_item.get("provider")
    news_sources = ''.join(map(lambda item: item.get("name"), news_item_providers))
    return {
                "title": external_news_item.get("name"),
                "description": external_news_item.get("description"),
                "link": external_news_item.get("url"),
                "source": news_sources
            }


def create_location_header_value(latitude, longitude, radius_meters=1000):
    return f"lat:{latitude};long={longitude};re:{radius_meters}"
