import { useState } from "react";
import ColumnList from "./ColumnList";
import SeatList from "./SeatList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
	confirmSeat,
	emptySeatNames,
	setChosenSeat,
	setIsDone,
	updateNthCustomer,
} from "./slices/seatSlice";
import { setIsClick } from "./slices/customerSlice";
import { addDetails } from "./slices/summarySlice";

function SelectingSeats() {
	const columnList = useSelector((store) => store.seat.columnList);

	const seatList = useSelector((store) => store.seat.seatList);

	const seatNames = useSelector((store) => store.seat.seatNames);

	const chosenSeats = useSelector((store) => store.seat.chosenSeats);

	const customers = useSelector((store) => store.customer.customers);

	const isDone = useSelector((store) => store.seat.isDone);

	const isClicked = useSelector((store) => store.customer.isClicked);

	const id = useSelector((store) => store.seat.nthCustomer);

	const customerDetails = useSelector((store) => store.summary.details);
	console.log(customerDetails);

	const dispatch = useDispatch();

	const handleClick = () => {
		if (!isDone) {
			dispatch(setIsDone());
		}
		dispatch(setChosenSeat(seatNames));
		dispatch(emptySeatNames());
		dispatch(confirmSeat());

		const customerDetails = {
			name: customers[id].name,
			seatNum: customers[id].seatNum,
			seatNames: seatNames,
		};

		dispatch(updateNthCustomer());
		dispatch(setIsClick());
	};

	return (
		<>
			{isClicked && (
				<p
					style={{
						textAlign: "center",
						marginTop: "20px",
						marginBottom: "20px",
						backgroundColor: "orangered",
					}}
				>
					Please select your seat now
				</p>
			)}

			<ul className="typeOfSeats">
				<li className="smallBox greenBox">Selected Seat</li>

				<li className="smallBox redBox">Reserved Seat</li>

				<li className="smallBox emptyBox">Empty Seat</li>
			</ul>

			<div className="seatStructure">
				<table>
					<tr>
						<td></td>
						{columnList.map((item, index) => (
							<ColumnList key={index} value={item} />
						))}
					</tr>
					{seatList.map((item, index) => (
						<SeatList key={index} item={item} />
					))}
				</table>
				<button onClick={handleClick}>Confirm Selection</button>
			</div>
			<div>
				<table className="Displaytable">
					<tr>
						<th>Name</th>
						<th>Number of Seats</th>
						<th>Seats</th>
					</tr>
					<tr>
						<td>
							<textarea id="nameDisplay"></textarea>
						</td>
						<td>
							<textarea id="NumberDisplay"></textarea>
						</td>
						<td>
							<textarea id="seatsDisplay"></textarea>
						</td>
					</tr>
				</table>
			</div>
		</>
	);
}

export default SelectingSeats;
