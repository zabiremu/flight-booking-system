import { DELETE, FLIGHTBOOKING } from "./actionTypes";

export const flightBookingActions = (value) => {
  return {
    type: FLIGHTBOOKING,
    payload: value,
  };
};

export const deleteRow = (value) => {
  return {
    type: DELETE,
    payload: value,
  };
};
