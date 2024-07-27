import { useState } from "react";
import CustomerInfo from "./CustomerInfo";
import SelectingSeats from "./SelectingSeats";

function App() {
	return (
		<>
			<h1>Movie Seat Selection</h1>
			<div className="container">
				<div className="selectionSeat">
					<CustomerInfo />
					<SelectingSeats />
				</div>
			</div>
		</>
	);
}

export default App;
