from flask import Flask, jsonify, request
import json
import os
app = Flask(__name__)

with open("Database.json") as f :
	database = json.load(f)

sendMessageObject = {
	"senderID" : "",
	"recieverID" : "", 
	"message" : "",
	"messageLength": 0
}

@app.route('/')
def homepage():
    return "Hello, there !"

@app.route('/sendMessage', methods=['POST'])
def sendMessage():
	recievedJson = request.json
	try:
		database['messages'].append(recievedJson)
		print(recievedJson)
	except Exception as e:
		print(str(e))
	return 

if __name__ == '__main__':
    app.run()