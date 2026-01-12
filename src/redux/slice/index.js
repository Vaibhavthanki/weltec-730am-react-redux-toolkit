import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import usersReducer from "./usersSlice";

export default combineReducers({
  counter: counterReducer,
  user: usersReducer,
});
