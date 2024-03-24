from flask import Flask, jsonify, request, redirect
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

total_funds = 0

index_html = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funds Tracker</title>
</head>
<body>
    <h1>Total Funds: {total_funds}</h1>
    <form action="/setfunds" method="POST">
        <label for="set_funds">Set Funds:</label>
        <input type="number" id="set_funds" name="funds" required>
        <button type="submit">Set Funds</button>
    </form>
    <form action="/addfunds" method="POST">
        <label for="add_funds">Add Funds:</label>
        <input type="number" id="add_funds" name="funds" required>
        <button type="submit">Add Funds</button>
    </form>
    <form action="/subfunds" method="POST">
        <label for="sub_funds">Subtract Funds:</label>
        <input type="number" id="sub_funds" name="funds" required>
        <button type="submit">Sub Funds</button>
    </form>
</body>
</html>
"""


@app.route('/')
def index():
    return index_html.format(total_funds=total_funds)


@app.route('/funds')
def funds():
    global total_funds
    return jsonify({'funds': total_funds})


@app.route('/setfunds', methods=['POST'])
def setfunds():
    global total_funds
    funds = int(request.form['funds'])
    total_funds = funds
    return redirect('/')


@app.route('/addfunds', methods=['POST'])
def addfunds():
    global total_funds
    funds = int(request.form['funds'])
    total_funds += funds
    return redirect('/')


@app.route('/subfunds', methods=['POST'])
def subfunds():
    global total_funds
    funds = int(request.form['funds'])
    total_funds -= funds
    return redirect('/')


if __name__ == '__main__':
    # Run on host
    app.run(host='0.0.0.0', port=7450)
