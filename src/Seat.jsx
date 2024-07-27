import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
	changeSeatState,
	setSeatNames,
	setIsDone,
	setChosenSeat,
} from "./slices/seatSlice";
import { setIsClick } from "./slices/customerSlice";

function Seat({ item }) {
	const isDone = useSelector((store) => store.seat.isDone);
	const chosenSeat = useSelector((store) => store.seat.chosenSeat);
	const customers = useSelector((store) => store.customer.customers);
	const id = useSelector((store) => store.seat.nthCustomer);

	const seatNames = useSelector((store) => store.seat.seatNames);

	const dispatch = useDispatch();

	const handleChange = (item) => {
		if (+customers[id].seatNum === seatNames.length) {
			let isDifferentFromSelectedItem = seatNames.every(
				(seat) => seat !== item.value
			);

			if (!isDifferentFromSelectedItem) {
				dispatch(changeSeatState(item));
				dispatch(setSeatNames(item));
			} else {
				dispatch(setChosenSeat(seatNames));
				dispatch(setIsDone());
				isDifferentFromSelectedItem = false;
				return;
			}
		} else {
			dispatch(changeSeatState(item));
			dispatch(setSeatNames(item));
		}
	};

	return (
		<>
			<td>
				<input
					type="checkbox"
					checked={item.booked}
					className="seats"
					value={item.value}
					onChange={(e) => handleChange({ ...item, booked: e.target.checked })}
					disabled={item.notAvailable ? item.notAvailable : isDone}
				/>
			</td>
		</>
	);
}

export default Seat;
