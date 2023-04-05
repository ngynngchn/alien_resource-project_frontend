import React from "react";
import Selection from "./Selection.jsx";

function Harvest({ onClick }) {
	return (
		<div className="Harvest">
			<h3>Harvest</h3>
			<Selection amount="5" onClick={onClick} />

			<Selection amount="10" onClick={onClick} />

			<Selection amount="15" onClick={onClick} />
		</div>
	);
}

export default Harvest;
