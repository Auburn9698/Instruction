# import necessary libraries
from flask import Flask, render_template

# create instance of Flask app
app = Flask(__name__)


# create route that renders index.html template
@app.route("/")
def index():
    team_list = ["Jumpers", "Dunkers", "Dribblers", "Passers"]
    return render_template("index.html", list=team_list)
# (You could call 'list' something else, you just have to use the same thing in both the app.py and index.html)

if __name__ == "__main__":
    app.run(debug=True)
