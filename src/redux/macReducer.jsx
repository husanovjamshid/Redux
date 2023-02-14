import { BUY_MAC, BUY_Some_MAC } from "./macType";

const initialState = {
  countOfMac: 15,
};

export const macReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MAC:
      return { ...state, countOfMac: state.countOfMac - 1 };
    case BUY_Some_MAC:
      return { ...state, countOfMac: state.countOfMac - action.payload };

    default:
      return state;
  }
};
