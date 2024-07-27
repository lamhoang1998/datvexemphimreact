import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	details: [],
};

const summarySlice = createSlice({
	name: "summary",
	initialState,
	reducers: {
		addDetails(state, action) {
			state.details.push(action.payload);
		},
	},
});

export const { addDetails } = summarySlice.actions;
export default summarySlice.reducer;
