import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slice/counter";
import UsersComponent from "./UsersComponent";
function App() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <>
      count is {counter}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <UsersComponent />
    </>
  );
}

export default App;
