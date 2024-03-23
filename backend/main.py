from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

total_funds = 0


@app.route('/funds')
def funds():
    global total_funds
    return jsonify({'funds': total_funds})


@app.route('/setfunds/<int:funds>')
def setfunds(funds):
    global total_funds
    total_funds = funds
    return jsonify({'message': f"funds set to {funds}"})


@app.route('/addfunds/<int:funds>')
def addfunds(funds):
    global total_funds
    total_funds += funds
    return jsonify({'message': f"added {funds}"})


if __name__ == '__main__':
    app.run()
