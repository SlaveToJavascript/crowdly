from flask import Flask
import sqlalchemy
from sqlalchemy import create_engine
import json 
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

host = 'hackathon-db.caygmzntd1hp.us-east-1.rds.amazonaws.com'
user = 'admin'
pw = 'TS0081234'
db = 'hackathon'

engine = create_engine(f"mysql://{user}:{pw}@{host}/{db}")

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/getAllProjects")
def getAllProjects():
    with engine.connect() as connection:
        qry = '''SELECT * FROM projects'''
        result = connection.execute(qry)
        print(result)
        return json.dumps([{column: str(value) for column, value in rowproxy.items()} for rowproxy in result])

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8100)
