import numpy as np
import pandas as pd
from sklearn.impute import SimpleImputer
from xgboost import XGBRegressor

def make_recommendation(searchTerms):
	dataset = pd.read_csv("./datasets/data.csv")
	X = dataset.iloc[:, :-1].values
	y = dataset.iloc[:, -1].values

	# Replace NaN values with mean of entire column
	imputer = SimpleImputer(missing_values = np.nan, strategy = "mean")
	imputer.fit(X[:, :])
	X[:, :] = imputer.transform(X[:, :])

	# Apply model to make predictions
	xgb_model = XGBRegressor().fit(X, y)
	prediction = xgb_model.predict([searchTerms])

	return float(prediction[0])
