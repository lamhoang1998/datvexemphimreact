import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	customers: [],
	isClicked: false,
};

const customerSlice = createSlice({
	name: "customer",
	initialState,
	reducers: {
		addCustomer: {
			prepare(name, seatNum) {
				return {
					payload: {
						name,
						seatNum,
					},
				};
			},
			reducer(state, action) {
				const id = state.customers.length;
				state.customers.push({ ...action.payload, id: id });
			},
		},
		setIsClick(state) {
			state.isClicked = !state.isClicked;
		},
	},
});

export const { addCustomer, setIsClick } = customerSlice.actions;

export default customerSlice.reducer;
