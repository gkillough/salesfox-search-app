import flask

app = flask.Flask("__main__")


@app.route("/")
def react_entrypoint():
    return flask.render_template("index.html")


app.run(debug=False)