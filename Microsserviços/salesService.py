from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/send-items', methods=['POST'])
def send_items():
    data = request.json
    response = requests.post('http://quotation-service:5001/generate-quotation', json=data)
    return response.json()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
