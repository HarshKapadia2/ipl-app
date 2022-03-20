import { Link } from "react-router-dom";
import "./App.css";
import fullLogo from "./logo-full.png";

function App() {
	return (
		<>
			<main>
				<img src={fullLogo} id="full-logo" alt="IPL" />
				<h1>Auction Price Predictor</h1>

				<Link id="cta" to="predict">
					Predict Auction Price
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
