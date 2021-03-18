import flask
from search_client.news import salesfox_news_client
from search_client.company import company_search_client

app = flask.Flask("__main__")


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

    return salesfox_news_client.retrieve_news(query, zip_code)


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


app.run(debug=True)
