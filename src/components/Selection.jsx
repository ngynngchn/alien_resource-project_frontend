import React from "react";

function Selection({ amount }) {
	return (
		<div className="Selection">
			<h2>{amount}</h2>
			<h2>Human</h2>
			<button value={amount}>+</button>
		</div>
	);
}

export default Selection;
