import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import Prediction from "./components/Prediction/Prediction";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/ipl-app" element={<App />} />
				<Route path="/ipl-app/predict" element={<Prediction />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.querySelector("body")
);
