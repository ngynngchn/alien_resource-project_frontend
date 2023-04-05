import React from "react";

function PopUp({ revenue, balance, onClick }) {
	return (
		<div className="PopUp">
			<div>
				<h6>
					Thank you! <br /> We just transfered a total of
					<span> ${revenue}</span> to you bank account. Your balance was updated
					to <span>${balance}</span>.
				</h6>
				<button onClick={onClick}> OK! </button>
			</div>
		</div>
	);
}

export default PopUp;
