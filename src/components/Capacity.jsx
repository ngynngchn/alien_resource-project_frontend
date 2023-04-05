import React from "react";

function Capacity({ humans }) {
	return (
		<div className="Capacity">
			<h3>Capacity</h3>
			<div className="bar">
				<div className="process" style={{ height: `${humans}px` }}>
					<h3>{humans}</h3>
				</div>
			</div>
		</div>
	);
}

export default Capacity;
