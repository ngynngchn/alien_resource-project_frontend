import { useState, useEffect } from "react";
import "./App.scss";
// component import
import Capacity from "./components/Capacity";
import Harvest from "./components/Harvest";
import Sell from "./components/Sell";
import PopUp from "./components/PopUp";

function App() {
	const [balance, setBalance] = useState(0);
	const [capacity, setCapacity] = useState(0);
	const [revenue, setRevenue] = useState(0);
	const [sales, setSales] = useState([]);
	const [totalSales, setTotalSales] = useState([]);
	const [sold, setSold] = useState(false);
	const [lastRev, setLastRev] = useState(0);

	// get balance and capacity status
	useEffect(() => {
		fetch("http://localhost:8889/api/v1/status")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setBalance(data.status.balance);
				setCapacity(data.status.capacity);
				setRevenue(data.status.revenue);
			});
	}, []);

	// add resources
	function addResources(e) {
		let amount = e.target.value;
		let timeStamp = new Date();

		let resource = { resources: amount, id: sales.length, time: timeStamp };

		fetch("http://localhost:8889/api/v1/resources", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(resource),
		})
			.then((response) => response.json())
			.then((data) => {
				setCapacity(data.status.capacity);
				setRevenue(data.status.revenue);
				setSales(data.status["current-harvest"]);
				setTotalSales(data.sales);
			})
			.catch((err) => console.log(err));
	}

	// sell resources

	function sellResources() {
		setSold(true);
		let timeStamp = new Date();
		let sale = { time: timeStamp, id: totalSales.length };

		fetch("http://localhost:8889/api/v1/sell", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(sale),
		})
			.then((response) => response.json())
			.then((data) => {
				setCapacity(data.status.capacity);
				setRevenue(data.status.revenue);
				setBalance(data.status.balance);
				setSales(data.status["current-harvest"]);
				setTotalSales(data.sales);
				setLastRev(data.sales[data.sales.length - 1]["total-revenue"]);
			})
			.catch((err) => console.log(err));
	}
	console.log("rev", revenue);

	return (
		<div className="App">
			{sold && (
				<PopUp
					balance={balance}
					revenue={lastRev}
					onClick={() => setSold(false)}
				/>
			)}
			<h1>${balance}</h1>
			<main>
				<Harvest onClick={addResources} />
				<Capacity humans={capacity} />
				<Sell revenue={revenue} onClick={sellResources} />
			</main>
		</div>
	);
}

export default App;
