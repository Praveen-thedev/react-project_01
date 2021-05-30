import React, {useState} from "react";
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';

const App = () => {
  const [userList, setUserList] = useState([]);
  const addUserDataHandler = (userData)=>{
        setUserList((prevUserList)=>{
          return [...prevUserList, userData];
        });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserDataHandler}/>
      <UserList users={userList}/>
    </div>
  );
};

export default App;
