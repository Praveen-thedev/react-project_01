import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({
    enteredFirstName: "",
    enteredLastName: "",
    enteredAge: "",
    enteredCity: "",
    enteredContact: "",
  });
  const addUserFNameHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredFirstName: event.target.value };
    });
  };
  const addUserLNameHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredLastName: event.target.value };
    });
  };
  const addUserAgeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAge: event.target.value };
    });
  };
  const addUserCityHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredCity: event.target.value };
    });
  };
  const addUserContactHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredContact: event.target.value };
    });
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      userInput.enteredFirstName.trim().length === 0 ||
      userInput.enteredCity.trim().length === 0
    ) {
      const errorBox = {
        title: "invalid input",
        message: "please fill form correctly (non-empty values)",
      };

      return props.onAddError(errorBox);
    }
    if (+userInput.enteredAge < 1) {
      const errorBox = {
        title: "Invalid age",
        message: "please Enter a valid age( > 0)",
      };

      return props.onAddError(errorBox);
    }
    const userData = {
      id: Math.random().toString(),
      fName: userInput.enteredFirstName,
      lName: userInput.enteredLastName,
      age: +userInput.enteredAge,
      city: userInput.enteredCity,
      contact: +userInput.enteredContact,
    };
    // console.log(userInput);
    props.onAddUser(userData);

    setUserInput(() => {
      return {
        enteredFirstName: "",
        enteredLastName: "",
        enteredAge: "",
        enteredCity: "",
        enteredContact: "",
      };
    });
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="first_name">First Name</label>
        <input
          id="first_name"
          type="text"
          value={userInput.enteredFirstName}
          onChange={addUserFNameHandler}
        />
        <label htmlFor="last_name">Last Name</label>
        <input
          id="last_name"
          type="text"
          value={userInput.enteredLastName}
          onChange={addUserLNameHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={userInput.enteredAge}
          onChange={addUserAgeHandler}
        />
        <label htmlFor="city_vill">City or Village</label>
        <input
          id="city_vill"
          type="text"
          value={userInput.enteredCity}
          onChange={addUserCityHandler}
        />
        <label htmlFor="mobile_number">Mobile Number</label>
        <input
          id="mobile_number"
          type="number"
          value={userInput.enteredContact}
          onChange={addUserContactHandler}
        />
        <Button type="submit"> Add User </Button>
      </form>
    </Card>
  );
};

export default AddUser;
