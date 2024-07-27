import { createSlice } from "@reduxjs/toolkit";
import ColumnList from "../ColumnList";

const initialState = {
	nthCustomer: 0,
	columnList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	seatList: [
		{
			id: 0,
			row: "A",
			seatNames: [
				{ value: "A1", booked: false, row: "A", notAvailable: false },
				{ value: "A2", booked: false, row: "A", notAvailable: false },
				{ value: "A3", booked: false, row: "A", notAvailable: false },
				{ value: "A4", booked: false, row: "A", notAvailable: false },
				{ value: "A5", booked: false, row: "A", notAvailable: false },
				{ value: "A6", booked: false, row: "A", notAvailable: false },
				{ value: "A7", booked: false, row: "A", notAvailable: false },
				{ value: "A8", booked: false, row: "A", notAvailable: false },
				{ value: "A9", booked: false, row: "A", notAvailable: false },
				{ value: "A10", booked: false, row: "A", notAvailable: false },
				{ value: "A11", booked: false, row: "A", notAvailable: false },
				{ value: "A12", booked: false, row: "A", notAvailable: false },
			],
		},
		{
			id: 1,
			row: "B",
			seatNames: [
				{ value: "B1", booked: false, row: "B", notAvailable: false },
				{ value: "B2", booked: false, row: "B", notAvailable: false },
				{ value: "B3", booked: false, row: "B", notAvailable: false },
				{ value: "B4", booked: false, row: "B", notAvailable: false },
				{ value: "B5", booked: false, row: "B", notAvailable: false },
				{ value: "B6", booked: false, row: "B", notAvailable: false },
				{ value: "B7", booked: false, row: "B", notAvailable: false },
				{ value: "B8", booked: false, row: "B", notAvailable: false },
				{ value: "B9", booked: false, row: "B", notAvailable: false },
				{ value: "B10", booked: false, row: "B", notAvailable: false },
				{ value: "B11", booked: false, row: "B", notAvailable: false },
				{ value: "B12", booked: false, row: "B", notAvailable: false },
			],
		},
		{
			id: 2,
			row: "C",
			seatNames: [
				{ value: "C1", booked: false, row: "C", notAvailable: false },
				{ value: "C2", booked: false, row: "C", notAvailable: false },
				{ value: "C3", booked: false, row: "C", notAvailable: false },
				{ value: "C4", booked: false, row: "C", notAvailable: false },
				{ value: "C5", booked: false, row: "C", notAvailable: false },
				{ value: "C6", booked: false, row: "C", notAvailable: false },
				{ value: "C7", booked: false, row: "C", notAvailable: false },
				{ value: "C8", booked: false, row: "C", notAvailable: false },
				{ value: "C9", booked: false, row: "C", notAvailable: false },
				{ value: "C10", booked: false, row: "C", notAvailable: false },
				{ value: "C11", booked: false, row: "C", notAvailable: false },
				{ value: "C12", booked: false, row: "C", notAvailable: false },
			],
		},
		{
			id: 3,
			row: "D",
			seatNames: [
				{ value: "D1", booked: false, row: "D", notAvailable: false },
				{ value: "D2", booked: false, row: "D", notAvailable: false },
				{ value: "D3", booked: false, row: "D", notAvailable: false },
				{ value: "D4", booked: false, row: "D", notAvailable: false },
				{ value: "D5", booked: false, row: "D", notAvailable: false },
				{ value: "D6", booked: false, row: "D", notAvailable: false },
				{ value: "D7", booked: false, row: "D", notAvailable: false },
				{ value: "D8", booked: false, row: "D", notAvailable: false },
				{ value: "D9", booked: false, row: "D", notAvailable: false },
				{ value: "D10", booked: false, row: "D", notAvailable: false },
				{ value: "D11", booked: false, row: "D", notAvailable: false },
				{ value: "D12", booked: false, row: "D", notAvailable: false },
			],
		},
		{
			id: 4,
			row: "E",
			seatNames: [
				{ value: "E1", booked: false, row: "E", notAvailable: false },
				{ value: "E2", booked: false, row: "E", notAvailable: false },
				{ value: "E3", booked: false, row: "E", notAvailable: false },
				{ value: "E4", booked: false, row: "E", notAvailable: false },
				{ value: "E5", booked: false, row: "E", notAvailable: false },
				{ value: "E6", booked: false, row: "E", notAvailable: false },
				{ value: "E7", booked: false, row: "E", notAvailable: false },
				{ value: "E8", booked: false, row: "E", notAvailable: false },
				{ value: "E9", booked: false, row: "E", notAvailable: false },
				{ value: "E10", booked: false, row: "E", notAvailable: false },
				{ value: "E11", booked: false, row: "E", notAvailable: false },
				{ value: "E12", booked: false, row: "E", notAvailable: false },
			],
		},
		{
			id: 5,
			row: "F",
			seatNames: [
				{ value: "F1", booked: false, row: "F", notAvailable: false },
				{ value: "F2", booked: false, row: "F", notAvailable: false },
				{ value: "F3", booked: false, row: "F", notAvailable: false },
				{ value: "F4", booked: false, row: "F", notAvailable: false },
				{ value: "F5", booked: false, row: "F", notAvailable: false },
				{ value: "F6", booked: false, row: "F", notAvailable: false },
				{ value: "F7", booked: false, row: "F", notAvailable: false },
				{ value: "F8", booked: false, row: "F", notAvailable: false },
				{ value: "F9", booked: false, row: "F", notAvailable: false },
				{ value: "F10", booked: false, row: "F", notAvailable: false },
				{ value: "F11", booked: false, row: "F", notAvailable: false },
				{ value: "F12", booked: false, row: "F", notAvailable: false },
			],
		},
		{
			id: 6,
			row: "G",
			seatNames: [
				{ value: "G1", booked: false, row: "G", notAvailable: false },
				{ value: "G2", booked: false, row: "G", notAvailable: false },
				{ value: "G3", booked: false, row: "G", notAvailable: false },
				{ value: "G4", booked: false, row: "G", notAvailable: false },
				{ value: "G5", booked: false, row: "G", notAvailable: false },
				{ value: "G6", booked: false, row: "G", notAvailable: false },
				{ value: "G7", booked: false, row: "G", notAvailable: false },
				{ value: "G8", booked: false, row: "G", notAvailable: false },
				{ value: "G9", booked: false, row: "G", notAvailable: false },
				{ value: "G10", booked: false, row: "G", notAvailable: false },
				{ value: "G11", booked: false, row: "G", notAvailable: false },
				{ value: "G12", booked: false, row: "G", notAvailable: false },
			],
		},
		{
			id: 7,
			row: "H",
			seatNames: [
				{ value: "H1", booked: false, row: "H", notAvailable: false },
				{ value: "H2", booked: false, row: "H", notAvailable: false },
				{ value: "H3", booked: false, row: "H", notAvailable: false },
				{ value: "H4", booked: false, row: "H", notAvailable: false },
				{ value: "H5", booked: false, row: "H", notAvailable: false },
				{ value: "H6", booked: false, row: "H", notAvailable: false },
				{ value: "H7", booked: false, row: "H", notAvailable: false },
				{ value: "H8", booked: false, row: "H", notAvailable: false },
				{ value: "H9", booked: false, row: "H", notAvailable: false },
				{ value: "H10", booked: false, row: "H", notAvailable: false },
				{ value: "H11", booked: false, row: "H", notAvailable: false },
				{ value: "H12", booked: false, row: "H", notAvailable: false },
			],
		},
		{
			id: 8,
			row: "I",
			seatNames: [
				{ value: "I1", booked: false, row: "I", notAvailable: false },
				{ value: "I2", booked: false, row: "I", notAvailable: false },
				{ value: "I3", booked: false, row: "I", notAvailable: false },
				{ value: "I4", booked: false, row: "I", notAvailable: false },
				{ value: "I5", booked: false, row: "I", notAvailable: false },
				{ value: "I6", booked: false, row: "I", notAvailable: false },
				{ value: "I7", booked: false, row: "I", notAvailable: false },
				{ value: "I8", booked: false, row: "I", notAvailable: false },
				{ value: "I9", booked: false, row: "I", notAvailable: false },
				{ value: "I10", booked: false, row: "I", notAvailable: false },
				{ value: "I11", booked: false, row: "I", notAvailable: false },
				{ value: "I12", booked: false, row: "I", notAvailable: false },
			],
		},
		{
			id: 9,
			row: "J",
			seatNames: [
				{ value: "J1", booked: false, row: "J", notAvailable: false },
				{ value: "J2", booked: false, row: "J", notAvailable: false },
				{ value: "J3", booked: false, row: "J", notAvailable: false },
				{ value: "J4", booked: false, row: "J", notAvailable: false },
				{ value: "J5", booked: false, row: "J", notAvailable: false },
				{ value: "J6", booked: false, row: "J", notAvailable: false },
				{ value: "J7", booked: false, row: "J", notAvailable: false },
				{ value: "J8", booked: false, row: "J", notAvailable: false },
				{ value: "J9", booked: false, row: "J", notAvailable: false },
				{ value: "J10", booked: false, row: "J", notAvailable: false },
				{ value: "J11", booked: false, row: "J", notAvailable: false },
				{ value: "J12", booked: false, row: "J", notAvailable: false },
			],
		},
	],
	isDone: true,
	seatNames: [],
	chosenSeats: [],
};

const seatSlice = createSlice({
	name: "seat",
	initialState,
	reducers: {
		changeSeatState(state, action) {
			state.seatList.map((item) => {
				if (item.row === action.payload.row) {
					const itemId = item.id;
					state.seatList[itemId].seatNames = state.seatList[
						itemId
					].seatNames.map((seat) =>
						seat.value === action.payload.value ? action.payload : seat
					);
				}
			});
		},
		setIsDone(state) {
			state.isDone = !state.isDone;
		},

		setSeatNames(state, action) {
			let notSameName = false;

			if (state.seatNames.length === 0) {
				state.seatNames.push(action.payload.value);
			}
			if (state.seatNames.length > 0) {
				if (!action.payload.booked) {
					const filteredSeatNames = state.seatNames.filter(
						(seat) => seat !== action.payload.value
					);

					state.seatNames = [...filteredSeatNames];
				} else {
					state.seatNames.forEach((seat) => {
						if (seat !== action.payload.value) {
							notSameName = true;
						}
					});

					if (notSameName) {
						state.seatNames.push(action.payload.value);
					}
					notSameName = false;
				}
			}
		},
		setChosenSeat(state, action) {
			state.chosenSeats.push(action.payload);
		},
		emptySeatNames(state) {
			state.seatNames = [];
		},
		confirmSeat(state) {
			state.chosenSeats[state.nthCustomer].forEach((seat) => {
				state.seatList.map((item) => {
					if (item.row === seat[0]) {
						const itemId = item.id;
						state.seatList[itemId].seatNames = state.seatList[
							itemId
						].seatNames.map((item) =>
							item.value === seat ? { ...item, notAvailable: true } : item
						);
					}
				});
			});
		},
		updateNthCustomer(state) {
			state.nthCustomer = state.nthCustomer + 1;
		},
	},
});

export const {
	changeSeatState,
	setIsDone,
	setSeatNames,
	setChosenSeat,
	emptySeatNames,
	confirmSeat,
	updateNthCustomer,
} = seatSlice.actions;

export default seatSlice.reducer;
