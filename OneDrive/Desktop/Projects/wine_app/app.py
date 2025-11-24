from flask import Flask, render_template, request
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained model
model = joblib.load('wine_model.pkl')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get input values from form
    features = [float(x) for x in request.form.values()]
    
    # Convert to numpy array and reshape
    input_array = np.array(features).reshape(1, -1)
    
    # Predict using the model
    prediction = model.predict(input_array)[0]

    # Interpret the prediction
    if prediction == 1:
        result = "Good Quality Wine"
    else:
        result = "Bad Quality Wine"
    
    return render_template('index.html', prediction_text=f'Predicted Wine Quality: {result}')

if __name__ == '__main__':
    app.run(debug=True)
