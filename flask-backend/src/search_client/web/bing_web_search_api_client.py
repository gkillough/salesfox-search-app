from ..bing.bing_search_client_class import BingSearchClient

BING_WEB_SEARCH_URL = "https://api.bing.microsoft.com/v7.0/search"

FRESHNESS_DAY = "Day"
FRESHNESS_WEEK = "Week"
FRESHNESS_MONTH = "Month"


def retrieve_news(search_term, zip_code=None, max_results=10):
    search_client = BingSearchClient(BING_WEB_SEARCH_URL)
    return search_client.execute_search_request(search_term, zip_code, max_results)
