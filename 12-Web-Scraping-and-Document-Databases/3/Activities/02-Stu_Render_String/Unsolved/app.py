# import necessary libraries
from flask import Flask, render_template

# @TODO: Initialize your Flask app here
app = Flask(__name__)

# Set variables
name = "Greg"
hobby = "Football"
hobby2 = "Football and Baseball"

# @TODO:  Create a route and view function that takes in a string and renders index.html template
@app.route("/")
def echo():
    return render_template("index.html", name=name, hobby=hobby)

# Bonus add a new route
@app.route("/bonus")
def bonus():

    return render_template("bonus.html", name=name, hobby2=hobby2)


if __name__ == "__main__":
    app.run(debug=True)
