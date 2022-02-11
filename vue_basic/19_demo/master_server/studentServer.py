import imp
from flask import Flask, jsonify


app = Flask(__name__)
app.debug = True


@app.route("/students")
def student_info():
  return jsonify([
    {"id":'001',"name":"tom","age":18},
    {"id":'002',"name":"beny","age":17},
    {"id":'003',"name":"doris","age":16}
    ])


if __name__ == "__main__":
  app.run(host="0.0.0.0", port="5000")