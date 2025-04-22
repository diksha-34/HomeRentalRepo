from flask import Flask, render_template, request
import pickle
import numpy as np
from flask_cors import CORS
import os

# Get the current directory where app.py is located
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Load the model and data from the proper paths
df1 = pickle.load(open(os.path.join(BASE_DIR, 'df1.pkl'), 'rb'))
nn_model = pickle.load(open(os.path.join(BASE_DIR, 'nn_model.pkl'), 'rb'))
X = pickle.load(open(os.path.join(BASE_DIR, 'X.pkl'), 'rb'))

app = Flask(__name__)
CORS(app)

@app.route('/recommend_houses', methods=['POST'])
def recommend():
    user_input = int(request.json.get('user_input'))
    
    num_recommendations = 5
    distances, indices = nn_model.kneighbors(X.iloc[[df1.index.get_loc(user_input)]].values.reshape(1, -1), n_neighbors=num_recommendations + 1)
    recommended_indices = indices.squeeze()[1:]
    interested_house = df1.iloc[[df1.index.get_loc(user_input)]].dropna(axis=1)
    recommended_houses = df1.iloc[recommended_indices]
    dict_ = recommended_houses.to_dict(orient='index')
   
    response = {'suggestions': dict_}

    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
