import React from "react";

function Sell({ revenue, onClick }) {
	return (
		<div className="Sell">
			<h3>Sell</h3>
			<h3>Potential revenue:</h3>
			<h2>${revenue}</h2>
			<button onClick={onClick} className="sell-btn">
				$$$
			</button>
		</div>
	);
}

export default Sell;
