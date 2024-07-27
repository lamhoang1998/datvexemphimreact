import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCustomer, setIsClick } from "./slices/customerSlice";
import { useSelector } from "react-redux";
import { setIsDone } from "./slices/seatSlice";

function CustomerInfo() {
	const [name, setName] = useState("");
	const [seatNum, setSeatNum] = useState("");

	const isClicked = useSelector((store) => store.customer.isClicked);

	const dispatch = useDispatch();
	const handleClick = () => {
		if (!name || !seatNum) alert("Please enter your name and number of seats");
		else if (name && seatNum) {
			dispatch(addCustomer(name, seatNum));
			dispatch(setIsClick());
			dispatch(setIsDone());
		}
	};

	return (
		<div className="inputform">
			<h2>fill the required details below and select your seats</h2>
			<div className="inputform-container">
				<div className="inputform-left">
					<label htmlFor="">
						Name
						<span>*</span>
					</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						disabled={isClicked}
					/>
				</div>
				<div className="inputform-right">
					<label htmlFor="">
						Number of Seats
						<span>*</span>
					</label>
					<input
						type="text"
						value={seatNum}
						onChange={(e) => setSeatNum(e.target.value)}
						disabled={isClicked}
					/>
				</div>
			</div>
			<button onClick={handleClick} disabled={isClicked}>
				Start Selecting
			</button>
		</div>
	);
}

export default CustomerInfo;
