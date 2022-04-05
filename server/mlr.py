import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.impute import SimpleImputer

def make_recommendation(searchTerms):
	dataset = pd.read_csv("./datasets/data.csv")
	X = dataset.iloc[:, :-1].values
	y = dataset.iloc[:, -1].values

	# Replace NaN values with mean of entire column
	imputer = SimpleImputer(missing_values = np.nan, strategy = "mean")
	imputer.fit(X[:, :])
	X[:, :] = imputer.transform(X[:, :])

	regressor = LinearRegression()
	regressor.fit(X, y)
	y_pred = regressor.predict([searchTerms])

	return y_pred[0]
