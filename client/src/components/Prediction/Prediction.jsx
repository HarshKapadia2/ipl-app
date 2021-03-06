import { useState } from "react";
import Form from "../Form/Form";
import "./Prediction.css";

const Prediction = () => {
	const [error, setError] = useState("");
	const [predictionValue, setPredictionValue] = useState();
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);

	const handleFormData = (data) => {
		if (
			isNaN(data.raa) ||
			isNaN(data.wins) ||
			isNaN(data.efScore) ||
			isNaN(data.salary)
		) {
			setError("All inputs should be numeric.");
			return;
		} else if (data.efScore < 0 || data.efScore > 1) {
			setError("Confidence in a player can only range from 0 to 100%.");
			return;
		} else if (data.salary < 0) {
			setError("A player's salary has to be non-negative.");
			return;
		}

		setPredictionValue();
		setIsButtonDisabled(true);

		fetch("https://ipl-app-api.herokuapp.com/predict", {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then((res) => res.json())
			.then((resData) => {
				if (resData.errorMsg !== undefined) setError(resData.errorMsg);
				else {
					const predictedPrice =
						resData.predictedPrice >= 0
							? parseInt(resData.predictedPrice)
							: parseInt(-1 * resData.predictedPrice);

					setIsButtonDisabled(false);
					setPredictionValue(predictedPrice);
				}
			})
			.catch((err) => console.error(err));
	};

	return (
		<>
			<main>
				<h1>Predict IPL Player's Auction Price</h1>

				<div className="form-div">
					{error !== "" && <div id="error">Error: {error}</div>}

					<Form
						sendData={handleFormData}
						isButtonDisabled={isButtonDisabled}
					/>

					{predictionValue !== undefined && (
						<div id="prediction-value">
							Predicted Salary: ${predictionValue}
						</div>
					)}
				</div>
			</main>

			<footer>
				<a
					href="https://github.com/HarshKapadia2/ipl-app"
					target="_blank"
					rel="noreferrer"
				>
					GitHub Repo
				</a>
			</footer>
		</>
	);
};

export default Prediction;
