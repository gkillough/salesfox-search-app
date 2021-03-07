from .bing_news_api_client import retrieve_news as retrieve_bing_news


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


def create_salesfox_news_item(external_news_item):
    news_item_providers = external_news_item.get("provider")
    news_sources = ''.join(map(lambda item: item.get("name"), news_item_providers))
    return {
                "title": external_news_item.get("name"),
                "description": external_news_item.get("description"),
                "link": external_news_item.get("url"),
                "source": news_sources
            }
