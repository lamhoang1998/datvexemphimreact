import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./slices/customerSlice";
import seatReducer from "./slices/seatSlice";

const store = configureStore({
	reducer: {
		customer: customerReducer,
		seat: seatReducer,
	},
});

export default store;
