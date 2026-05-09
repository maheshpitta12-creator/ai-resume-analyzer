from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/analyze', methods=['GET'])
def analyze_resume():
    return jsonify({
        'score': 85,
        'skills': ['React.js', 'Python', 'JavaScript']
    })

if __name__ == '__main__':
    app.run(debug=True)
