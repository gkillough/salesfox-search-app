import flask
from flask import json
from werkzeug.exceptions import HTTPException

from search_client.bing.bing_search_client_class import BING_NEWS_SEARCH_CLIENT, BING_WEB_SEARCH_CLIENT
from search_client.company import company_search_client
from search_client.salesfox_search_client import SalesfoxSearchClient
from search_client.weather import salesfox_weather_client

app = flask.Flask(import_name="__main__", template_folder="../templates")

salesfox_news_search_client = SalesfoxSearchClient(BING_NEWS_SEARCH_CLIENT)
salesfox_industry_news_search_client = SalesfoxSearchClient(BING_NEWS_SEARCH_CLIENT, {"category": "Business"})
salesfox_web_search_client = SalesfoxSearchClient(BING_WEB_SEARCH_CLIENT)


@app.route("/")
def react_entrypoint():
    return flask.render_template("index.html")


@app.errorhandler(HTTPException)
def handle_exception(e):
    response = e.get_response()
    response.data = json.dumps({
        "code": e.code,
        "name": e.name,
        "description": e.description,
    })
    response.content_type = "application/json"
    return response


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
# Endpoint: http://localhost:5000/api/industry
# Params:
# - q: query/search term
# - zip_code: zip code used for location-based results
@app.route("/api/industry")
def get_industry_news():
    query = flask.request.args.get('q')
    zip_code = flask.request.args.get('zip_code')

    if query is None:
        flask.abort(400, "The 'q' query param is required")

    modified_query = f"{query} industry"

    return salesfox_industry_news_search_client.search(modified_query, zip_code)


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
