import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customerSlice";
import seatReducer from "./slices/seatSlice";
import summaryReducer from "./slices/summarySlice";

const store = configureStore({
	reducer: {
		customer: customerReducer,
		seat: seatReducer,
		summary: summaryReducer,
	},
});

export default store;
