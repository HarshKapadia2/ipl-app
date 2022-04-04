from flask import Flask, jsonify, render_template
from flask import request
from flask_cors import CORS
from mlr import make_recommendation


app = Flask(__name__)
CORS(app)


@app.route("/get")
def get_price():
    t1 = float(request.args.get("raa"))
    t2 = float(request.args.get("wins"))
    t3 = float(request.args.get("efscore"))
    t4 = float(request.args.get("salary"))
    searchTerms = [t1, t2, t3, t4]
    print(searchTerms)
    res = make_recommendation(searchTerms)
    print(res)
    return str(res)


app.run(debug=True)
