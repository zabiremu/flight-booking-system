import { DELETE, FLIGHTBOOKING } from "./actionTypes";

const initialState = {
  value: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTBOOKING:
      return {
        ...state,
        value: [...state.value, action.payload],
      };
    case DELETE:
      return {
        // ...state,
        value: state.value.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default bookingReducer;
