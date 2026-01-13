import { call, put, takeLatest } from "redux-saga/effects";
import {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
} from "../slice/usersSlice";
import axios from "axios";

// Worker saga: performs the API call
function* getUserData() {
  try {
    const user = yield call(
      axios,
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("Fetched users:", user.data);
    yield put(getUsersSuccess(user.data));
  } catch (error) {
    yield put(getUsersFailure(error.message));
  }
}

// Watcher saga: watches for the getUsers action
export function* watchGetUsers() {
  yield takeLatest(getUsers.type, getUserData); // Use .type to get the action string
}
