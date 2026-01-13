import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/slice/usersSlice";

const UsersComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user?.list);
  const userStatus = useSelector((state) => state.user?.status);
  const error = useSelector((state) => state.user?.error);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(getUsers());
    }
  }, [userStatus, dispatch]);

  if (userStatus === "loading") {
    return <div>Loading users...</div>;
  }

  if (userStatus === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersComponent;
