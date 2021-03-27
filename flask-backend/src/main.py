import os
import pathlib

import flask
from flask import json
from werkzeug.exceptions import HTTPException

from search_client.bing.bing_search_client_class import BING_NEWS_SEARCH_CLIENT, BING_WEB_SEARCH_CLIENT
from search_client.company import company_search_client
from search_client.salesfox_search_client import SalesfoxSearchClient
from search_client.weather import salesfox_weather_client

APP_FILE_DIR = os.path.dirname(os.path.abspath(__file__))
BACK_END_DIR = str(pathlib.Path(os.path.join(APP_FILE_DIR, os.pardir)).resolve())
STATIC_DIR = os.path.join(BACK_END_DIR, "static")
TEMPLATES_DIR = os.path.join(BACK_END_DIR, "templates")

app = flask.Flask(import_name="__main__", static_folder=STATIC_DIR, template_folder=TEMPLATES_DIR)

salesfox_news_search_client = SalesfoxSearchClient(BING_NEWS_SEARCH_CLIENT)
salesfox_industry_news_search_client = SalesfoxSearchClient(BING_NEWS_SEARCH_CLIENT, {"category": "Business"})
salesfox_web_search_client = SalesfoxSearchClient(BING_WEB_SEARCH_CLIENT)


@app.route("/")
def react_entrypoint():
    return flask.render_template("index.html")


# FIXME remove
@app.route("/api/flask-info")
def get_flask_info():
    return {
        "root-path": app.root_path,
        "templates-dir": app.template_folder,
        "static-dir": app.static_folder,
        "APP_FILE_DIR": APP_FILE_DIR,
        "BACK_END_DIR": BACK_END_DIR,
        "STATIC_DIR": STATIC_DIR,
        "TEMPLATES_DIR": TEMPLATES_DIR
    }


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


# For running flask locally with python
if __name__ == '__main__':
    app.run()
