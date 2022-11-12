from flask import Flask
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder="static/build", static_url_path="/")
CORS(app)

@app.route("/api", methods=["GET"])
@cross_origin()
def index():
    return {"predictions": ["0.5", "0.6", "0.7"]}


@app.route("/favicon.ico")
@cross_origin()
def favicon():
    return send_from_directory(app.static_folder, 'favicon.ico')

@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()