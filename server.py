from flask import Flask
from flask.helpers import send_from_directory

# init flask with static folder for react
app = Flask(__name__, static_folder="templates/", static_url_path="/")

@app.route("/")
def index():
    return send_from_directory(app.static_folder , "index.html")

if __name__ == '__main__':
    app.run()