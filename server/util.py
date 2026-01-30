import json
import pickle
import numpy as np
import pandas as pd
import os

__locations = None
__data_columns = None
__model = None

def get_estimated_price(location, sqft, bhk, bath):
    try:
        loc_index = __data_columns.index(location.lower())
    except:
        loc_index = -1
    
    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if loc_index >= 0:
        x[loc_index] = 1
    
    feature_names = __model.feature_names_in_  
    x_df = pd.DataFrame([x], columns=feature_names)
    
    return round(__model.predict(x_df)[0], 2)

def get_location_names():
    return __locations

def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __data_columns, __locations, __model
    
    base_dir = os.path.dirname(__file__)
    artifacts_dir = os.path.join(base_dir, "artifacts")
    
    with open(os.path.join(artifacts_dir, "banglore_house_price_model.pickle"), "rb") as f:
        __model = pickle.load(f)
    
    with open(os.path.join(artifacts_dir, "columns.json"), "r") as f:
        __data_columns = __model.feature_names_in_.tolist()
        __locations = __data_columns[3:]  
    
    print("loading saved artifacts...done")

if __name__ == '__main__':
    load_saved_artifacts()
    print(get_location_names())
    print(get_estimated_price('1st Phase JP Nagar', 1000, 3, 3))
    print(get_estimated_price('1st Phase JP Nagar', 1000, 2, 2))
    print(get_estimated_price('Kalhalli', 1000, 2, 2)) 
    print(get_estimated_price('Ejipura', 1000, 2, 2))