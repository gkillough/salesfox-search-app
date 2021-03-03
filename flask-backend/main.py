import flask
import news

app = flask.Flask("__main__")


@app.route("/")
def react_entrypoint():
    return flask.render_template("index.html")


# To use this API:
# http://localhost:5000/api/news?zip_code=12345
@app.route("/api/news")
def get_news():
    requested_zip_code = flask.request.args.get('zip_code')
    if requested_zip_code is None:
        flask.abort(400, "The 'zip_code' query param is required")
    return news.retrieve_news(requested_zip_code)


app.run(debug=True)
