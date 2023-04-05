import React from "react";

function Selection({ amount, onClick }) {
	return (
		<div className="Selection">
			<h2>{amount}</h2>
			<h2>Human</h2>
			<button onClick={onClick} value={amount}>
				+
			</button>
		</div>
	);
}

export default Selection;
