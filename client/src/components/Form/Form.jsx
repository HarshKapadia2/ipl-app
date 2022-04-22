import { useState } from "react";
import "./Form.css";

const Form = ({ sendData, isButtonDisabled }) => {
	const [raa, setRaa] = useState(0);
	const [wins, setWins] = useState(0);
	const [efScore, setEfScore] = useState(0);
	const [salary, setSalary] = useState(0);

	const handleSubmit = (event) => {
		event.preventDefault();
		sendData({ raa, wins, efScore, salary });
	};

	return (
		<form onSubmit={(event) => handleSubmit(event)}>
			<label htmlFor="raa">
				<span>
					RAA&nbsp;<sup>*</sup>
				</span>
				<input
					type="number"
					name="raa"
					id="raa"
					onChange={(event) => {
						setRaa(parseInt(event.target.value));
					}}
					step={1}
					title="Integers are allowed."
					required
				/>
			</label>

			<label htmlFor="wins">
				<span>
					Wins&nbsp;<sup>*</sup>
				</span>
				<input
					type="number"
					name="wins"
					id="wins"
					onChange={(event) => {
						setWins(parseFloat(event.target.value));
					}}
					min={-1}
					max={1}
					step={0.001}
					title="Numbers between -1 and 1 (both inclusive) are allowed."
					required
				/>
			</label>

			<label htmlFor="ef-score">
				<span>
					EF Score: <sup>*</sup> {Math.round(efScore * 100)}%
				</span>
				<input
					type="range"
					name="ef-score"
					id="ef-score"
					min={0}
					max={1}
					step={0.001}
					value={efScore}
					onChange={(event) => {
						setEfScore(parseFloat(event.target.value));
					}}
					required
				/>
			</label>

			<label htmlFor="salary">
				<span>
					Previous Year's Salary (in $)&nbsp;<sup>*</sup>
				</span>
				<input
					type="number"
					name="salary"
					id="salary"
					onChange={(event) => {
						setSalary(parseInt(event.target.value));
					}}
					min={0}
					step={1}
					title="Non-negative integers are allowed."
					required
				/>
			</label>

			<input
				type="submit"
				value="Predict Price"
				disabled={isButtonDisabled}
			/>
		</form>
	);
};

export default Form;
