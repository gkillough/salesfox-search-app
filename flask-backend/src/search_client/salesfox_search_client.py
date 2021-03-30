def create_salesfox_result_item(bing_result_item, bing_schema):
    # TODO add "sources" extraction to schema
    bing_result_provider = bing_result_item.get("provider")
    sources = ""
    if bing_result_provider:
        sources = "".join(map(lambda item: item.get("name", ""), bing_result_provider))
    return {
        "title": bing_result_item.get(bing_schema["title"], "Unknown Title"),
        "description": bing_result_item.get(bing_schema["description"], "Unknown Description"),
        "link": bing_result_item.get(bing_schema["link"], "#"),
        "source": sources
    }


class SalesfoxSearchClient:
    def __init__(self, bing_search_client, additional_bing_params=None):
        self.bing_search_client = bing_search_client
        self.additional_bing_params = additional_bing_params

    def search(self, search_term, zip_code):
        print(f"A search for ['{search_term}'] was performed")
        bing_response = self.bing_search_client.execute_search_request(
            search_term,
            zip_code,
            5,
            additional_params=self.additional_bing_params
        )
        bing_results_list = self.bing_search_client.extract_results_list_from_response(bing_response)

        if bing_results_list is None:
            bing_results_list = []

        salesfox_news = []
        for bing_result in bing_results_list:
            salesfox_news_item = create_salesfox_result_item(bing_result, self.bing_search_client.schema)
            salesfox_news.append(salesfox_news_item)

        return {
            "count": len(salesfox_news),
            "items": salesfox_news
        }
