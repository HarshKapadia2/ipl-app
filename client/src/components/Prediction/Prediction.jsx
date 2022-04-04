import { useState, useRef, useEffect } from "react";
import Form from "../Form/Form";
import "./Prediction.css";

const Prediction = () => {
	const [playerType, setPlayerType] = useState("Batsman");
	const batsmanTab = useRef();
	const bowlerTab = useRef();

	useEffect(() => {
		if (playerType === "Batsman") {
			batsmanTab.current.className += " orange-bottom-border";
			bowlerTab.current.className = "single-tab";
		} else {
			bowlerTab.current.className += " orange-bottom-border";
			batsmanTab.current.className = "single-tab";
		}
	}, [playerType]);

	const choosePlayerType = (chosenPlayerType) => {
		if (chosenPlayerType === "Batsman" && playerType !== "Batsman")
			setPlayerType("Batsman");
		else if (chosenPlayerType === "Bowler" && playerType !== "Bowler")
			setPlayerType("Bowler");
	};

	return (
		<>
			<main>
				<h1>IPL Auction Price Prediction</h1>

				<div className="form-div">
					<div id="tabs">
						<div
							className="single-tab"
							ref={batsmanTab}
							onClick={() => choosePlayerType("Batsman")}
						>
							Batsman
						</div>
						<div
							className="single-tab"
							ref={bowlerTab}
							onClick={() => choosePlayerType("Bowler")}
						>
							Bowler
						</div>
					</div>

					{playerType === "Batsman" ? (
						<Form type="Batsman" />
					) : (
						<Form type="Bowler" />
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
