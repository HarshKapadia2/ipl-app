import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.impute import SimpleImputer
from xgboost import XGBRegressor


def make_recommendation(searchTerms):
    dataset = pd.read_csv("./datasets/data.csv")
    X = dataset.iloc[:, :-1].values
    y = dataset.iloc[:, -1].values

    # Replace NaN values with mean of entire column
    imputer = SimpleImputer(missing_values=np.nan, strategy="mean")
    imputer.fit(X[:, :])
    X[:, :] = imputer.transform(X[:, :])

    # Apply model to make predictions
    xgb_model = XGBRegressor().fit(X, y)
    prediction = xgb_model.predict(searchTerms)

    # regressor = LinearRegression()
    # regressor.fit(X, y)
    # y_pred = regressor.predict([searchTerms])

    return prediction[0]


if __name__ == '__main__':
    # print(make_recommendation([[377, 0.5, 0.2, 100000]]))
    print(make_recommendation([[347, 1.25, 0.297, 125000]]))
