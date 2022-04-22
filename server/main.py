from flask import Flask, jsonify, render_template, make_response
from flask import request
import json
from predict import make_recommendation

app = Flask(__name__)

@app.route("/", methods = ["GET"])
def homePage():
	if request.method == "GET":
		return render_template("index.html")

@app.route("/predict", methods = ["POST", "OPTIONS"])
def predictPrice():
	if request.method == "OPTIONS": # For the CORS Preflight request
		return corsPreflightResponse()
	elif request.method == "POST":
		try:
			data = request.json
		except:
			return jsonify({"errorMsg": "Malformed request body."}), 400

		raa = data["raa"]
		wins = data["wins"]
		efScore = data["efScore"]
		salary = data["salary"]

		if not isinstance(raa, int) and not isinstance(raa, float):
			return jsonify({"errorMsg": "RAA should be a number."}), 400
		if not isinstance(wins, int) and not isinstance(wins, float):
			return jsonify({"errorMsg": "Wins should be a number."}), 400
		if not isinstance(efScore, int) and not isinstance(efScore, float):
			return jsonify({"errorMsg": "EF score should be a number."}), 400
		if not isinstance(salary, int) and not isinstance(salary, float):
			return jsonify({"errorMsg": "Salary should be a number."}), 400

		if efScore < 0 or efScore > 1:
			return jsonify({"errorMsg": "EF score should be between 0 and 1, both inclusive."}), 400

		if salary < 0:
			return jsonify({"errorMsg": "Salary should be non-negative."}), 400

		inputs = [raa, wins, efScore, salary]
		predictedPrice = make_recommendation(inputs)

		response = make_response(jsonify({"predictedPrice": predictedPrice}))
		response.headers.add("Access-Control-Allow-Origin", "https://harshkapadia2.github.io")

		return response, 200

@app.route("/ping", methods = ["GET", "OPTIONS"])
def ping():
	if request.method == "OPTIONS": # For the CORS Preflight request
		return corsPreflightResponse()
	elif request.method == "GET":
		response = make_response(jsonify({}))
		response.headers.add("Access-Control-Allow-Origin", "https://harshkapadia2.github.io")

		return response, 200

def corsPreflightResponse():
	response = make_response()
	response.headers.add("Access-Control-Allow-Origin", "https://harshkapadia2.github.io")
	response.headers.add("Access-Control-Allow-Headers", "*")
	response.headers.add("Access-Control-Allow-Methods", "GET, POST")
	response.headers.add("Access-Control-Max-Age", 3600)
	return response

if __name__ == "__main__":
	app.run(debug = False)
