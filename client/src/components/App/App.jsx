import { Link } from "react-router-dom";
import "./App.css";
import fullLogo from "./logo-full.png";
import arrow from "./arrow.svg";

function App() {
	return (
		<>
			<main>
				<img
					src={fullLogo}
					id="full-logo"
					alt="Indian Premiere League"
				/>
				<h1>Auction Price Predictor</h1>

				<Link id="cta" to="predict">
					Predict Price
					<img src={arrow} alt="Now!" />
				</Link>
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
}

export default App;
