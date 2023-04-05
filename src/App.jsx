import { useState, useEffect } from "react";
import "./App.scss";
// component import
import Capacity from "./components/Capacity";
import Harvest from "./components/Harvest";
import Sell from "./components/Sell";

function App() {
	const [balance, setBalance] = useState(0);
	const [capacity, setCapacity] = useState(0);

	// get balance and capacity status
	useEffect(() => {
		fetch("http://localhost:8889/api/v1/status")
			.then((response) => response.json())
			.then((data) => {
				setBalance(data[0].balance);
				setCapacity(data[0].capacity);
			});
	}, []);

	console.log(balance, capacity);

	return (
		<div className="App">
			<h1>${balance}</h1>
			<main>
				<Harvest />
				<Capacity humans={capacity} />
				<Sell />
			</main>
		</div>
	);
}

export default App;
