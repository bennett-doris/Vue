from flask import Flask, jsonify


app = Flask(__name__)
app.debug = True


@app.route("/cars")
def student_info():
  return jsonify([
    {"id":'001',"name":"奔驰","price":199},
    {"id":'002',"name":"马自达","price":170},
    {"id":'003',"name":"捷达","price":160}
    ])


if __name__ == "__main__":
  app.run(host="0.0.0.0", port="5001")