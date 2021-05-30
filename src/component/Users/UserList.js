import React from "react";
import Card from "../UI/Card";
import styles from './UserList.module.css';

const UserList = (props) => {
  return (
    <Card className ={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.fName} {user.lName} (is {user.age} year old)and live in
            {user.city}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
