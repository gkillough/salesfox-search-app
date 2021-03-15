from .news_env_config import BING_API_KEY
from ..bing.bing_search_client_class import BingSearchClient

BING_NEWS_SEARCH_URL = "https://api.bing.microsoft.com/v7.0/news/search"

FRESHNESS_DAY = "Day"
FRESHNESS_WEEK = "Week"
FRESHNESS_MONTH = "Month"


def retrieve_news(search_term, zip_code=None, max_results=10, freshness=FRESHNESS_WEEK):
    search_client = BingSearchClient(BING_NEWS_SEARCH_URL, BING_API_KEY)

    additional_params = {"freshness": freshness}
    return search_client.execute_search_request(search_term, zip_code, max_results, additional_params=additional_params)
