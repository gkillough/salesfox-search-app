import flask

from search_client.bing.bing_search_client_class import BingSearchClient, BING_NEWS_SEARCH_URL, BING_WEB_SEARCH_URL
from search_client.company import company_search_client
from search_client.salesfox_search_client import SalesfoxSearchClient
from search_client.weather import salesfox_weather_client

app = flask.Flask("__main__")

bing_news_search_client = BingSearchClient(BING_NEWS_SEARCH_URL)
bing_web_search_client = BingSearchClient(BING_WEB_SEARCH_URL)

salesfox_news_search_client = SalesfoxSearchClient(bing_news_search_client)
salesfox_web_search_client = SalesfoxSearchClient(bing_news_search_client)


@app.route("/")
def react_entrypoint():
    return flask.render_template("index.html")


# To use this API:
# Endpoint: http://localhost:5000/api/news
# Params:
# - q: query/search term
# - zip_code: zip code used for location-based results
@app.route("/api/news")
def get_news():
    query = flask.request.args.get('q')
    zip_code = flask.request.args.get('zip_code')

    if query is None:
        flask.abort(400, "The 'q' query param is required")

    return salesfox_news_search_client.search(query, zip_code)


# To use this API:
# Endpoint: http://localhost:5000/api/persona
# Params:
# - q: query/search term
# - zip_code: zip code used for location-based results
@app.route("/api/persona")
def find_persona_news():
    query = flask.request.args.get('q')
    zip_code = flask.request.args.get('zip_code')

    if query is None:
        flask.abort(400, "The 'q' query param is required")

    modified_query = f"how to succeed as a \"{query}\""

    return salesfox_web_search_client.search(modified_query, zip_code)


# To use this API:
# Endpoint: http://localhost:5000/api/companies
# Params:
# - name: company name to search for
@app.route("/api/companies")
def find_company():
    company_name = flask.request.args.get('name')
    if company_name is None:
        flask.abort(400, "The 'name' query param is required")
    return company_search_client.find_by_name(company_name)


# To use this API:
# Endpoint: http://localhost:5000/api/weather
# Params:
# - zip_code: zip code used for location-based results
@app.route("/api/weather")
def find_historical_weather():
    zip_code = flask.request.args.get('zip_code')
    if zip_code is None:
        flask.abort(400, "The 'zip_code' query param is required")
    return salesfox_weather_client.five_day(zip_code)


app.run(debug=True)
