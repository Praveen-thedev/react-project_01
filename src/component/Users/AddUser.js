import React, { useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const cityRef = useRef();
  const contactRef = useRef();
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserFName = firstNameRef.current.value;
    const enteredUserLName = lastNameRef.current.value;
    const enteredUserAge = ageRef.current.value;
    const enteredUserCity = cityRef.current.value;
    const enteredUserContact = contactRef.current.value;
    if (
      enteredUserFName.trim().length === 0 ||
      enteredUserCity.trim().length === 0
    ) {
      const errorBox = {
        title: "invalid input",
        message: "please fill form correctly (non-empty values)",
      };

      return props.onAddError(errorBox);
    }
    if (+enteredUserAge < 1) {
      const errorBox = {
        title: "Invalid age",
        message: "please Enter a valid age( > 0)",
      };

      return props.onAddError(errorBox);
    }
    const userData = {
      id: Math.random().toString(),
      fName: enteredUserFName,
      lName: enteredUserLName,
      age: enteredUserAge,
      city: enteredUserCity,
      contact: enteredUserContact,
    };
    // console.log(userInput);
    props.onAddUser(userData);
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    ageRef.current.value = "";
    cityRef.current.value = "";
    contactRef.current.value = "";
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="first_name">First Name</label>
        <input id="first_name" type="text" ref={firstNameRef} />
        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" type="text" ref={lastNameRef} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" ref={ageRef} />
        <label htmlFor="city_vill">City or Village</label>
        <input id="city_vill" type="text" ref={cityRef} />
        <label htmlFor="mobile_number">Mobile Number</label>
        <input id="mobile_number" type="number" ref={contactRef} />
        <Button type="submit"> Add User </Button>
      </form>
    </Card>
  );
};

export default AddUser;
