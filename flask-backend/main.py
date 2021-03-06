import flask
import news
import companies

app = flask.Flask("__main__")


@app.route("/")
def react_entrypoint():
    return flask.render_template("index.html")


"""
To use this API:
http://localhost:5000/api/news?zip_code=12345
"""


@app.route("/api/news")
def get_news():
    requested_zip_code = flask.request.args.get('zip_code')
    if requested_zip_code is None:
        flask.abort(400, "The 'zip_code' query param is required")
    zip_code = int(requested_zip_code)
    return news.retrieve_news(zip_code)


@app.route("/api/companies")
def find_company():
    company_name = flask.request.args.get('name')
    if company_name is None:
        flask.abort(400, "The 'name' query param is required")
    return companies.find_companies_by_name(company_name)


app.run(debug=True)
