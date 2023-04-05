import React from "react";
import Selection from "./Selection.jsx";

function Harvest() {
	return (
		<div className="Harvest">
			<h3>Harvest</h3>
			<Selection amount="1" />
			<Selection amount="5" />
			<Selection amount="15" />
		</div>
	);
}

export default Harvest;
