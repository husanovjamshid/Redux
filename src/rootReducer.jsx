import { combineReducers } from "redux";
import { macReducer } from "./redux/macReducer";

export const rootReducer = combineReducers({
  mac: macReducer,
});
