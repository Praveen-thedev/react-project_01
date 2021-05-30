import React, { useState } from "react";
import AddUser from "./component/Users/AddUser";
import UserList from "./component/Users/UserList";
import ErrorModel from "./component/UI/ErrorModel";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [errors, setError] = useState();
  const addUserDataHandler = (userData) => {
    setUserList((prevUserList) => {
      return [...prevUserList, userData];
    });
  };

  const addErrorHandler = (error) => {
    // console.log(error);
    setError({
      title: error.title,
      message: error.message,
    });
  };
  const clickErrorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {errors && (
        <ErrorModel
          title={errors.title}
          message={errors.message}
          onConfirm={clickErrorHandler}
        />
      )}
      <AddUser onAddUser={addUserDataHandler} onAddError={addErrorHandler} />
      <UserList users={userList} />
      </React.Fragment>
  );
};

export default App;
