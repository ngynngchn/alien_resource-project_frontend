import { useState, useEffect } from "react";
import "./App.scss";
// component import
import Capacity from "./components/Capacity";
import Harvest from "./components/Harvest";
import Sell from "./components/Sell";
import PopUp from "./components/PopUp";

function App() {
	const [status, setStatus] = useState({});
	const [sales, setSales] = useState([]);

	const [sold, setSold] = useState(false);
	const [lastRev, setLastRev] = useState(0);

	// get balance and capacity status
	// useEffect(() => {
	// 	fetch("http://localhost:8889/api/v1/status")
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	//			setStatus(data)
	//
	// 		});
	// }, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:8889/api/v1/status");
				const data = await response.json();
				console.log(data);

				setStatus(data.status);
			} catch (err) {
				console.log(err);
				throw new Error("Sorry I could not get your information");
			}
		};
		fetchData();
	}, []);

	console.log(status);

	// add resources
	async function addResources(e) {
		let amount = e.target.value;
		let timeStamp = new Date();

		let resource = {
			resources: amount,
			id: status["current-harvest"].length,
			time: timeStamp,
		};

		/* fetch("http://localhost:8889/api/v1/resources", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(resource),
		})
			.then((response) => response.json())
			.then((data) => {
				setStatus(data.status);
				setSales(data.sales);
			})
			.catch((err) => console.log(err)); */
		try {
			const response = await fetch("http://localhost:8889/api/v1/resources", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(resource),
			});
			const data = await response.json();
			setStatus(data.status);
			setSales(data.sales);
		} catch (err) {
			throw new Error("Sorry I could not add your resources");
		}
	}

	// sell resources

	/* 	function sellResources() {
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
			setStatus(data.status);
			setSales(data.sales);
			setLastRev(data.sales[data.sales.length - 1]["total-revenue"]);
			})
			.catch((err) => console.log(err));
	} */
	async function sellResources() {
		setSold(true);
		let timeStamp = new Date();
		let sale = { time: timeStamp, id: sales.length };

		try {
			const response = await fetch("http://localhost:8889/api/v1/sell", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(sale),
			});
			const data = await response.json();
			setStatus(data.status);
			setSales(data.sales);
			setLastRev(data.sales[data.sales.length - 1]["total-revenue"]);
		} catch (err) {
			throw new Error("Sorry I couldn't sell your resources");
		}
	}

	console.log("rev", status.revenue);

	return (
		<div className="App">
			{sold && (
				<PopUp
					balance={status.balance}
					revenue={lastRev}
					onClick={() => setSold(false)}
				/>
			)}
			<h1>${status.balance}</h1>
			<main>
				<Harvest onClick={addResources} />
				<Capacity humans={status.capacity} />
				<Sell revenue={status.revenue} onClick={sellResources} />
			</main>
		</div>
	);
}

export default App;
