import "./Form.css";

const Form = () => {
	return (
		<form>
			<label htmlFor="raa">
				RAA
				<input type="number" name="raa" id="raa" />
			</label>

			<label htmlFor="wins">
				Wins
				<input type="number" name="wins" id="wins" />
			</label>

			<label htmlFor="ef-score">
				EF Score
				<input
					type="range"
					name="ef-score"
					id="ef-score"
					min="0"
					max="10"
				/>
			</label>

			<label htmlFor="salary">
				Salary
				<input type="number" name="salary" id="salary" />
			</label>

			<input type="submit" value="Predict" />
		</form>
	);
};

export default Form;
