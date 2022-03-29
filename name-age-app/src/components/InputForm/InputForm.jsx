import React, { useState } from "react";
import styles from "./inputForm.module.css";

const InputForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let message = "";

    if (enteredUsername === "" || enteredAge === "") {
      message = "Please enter a valid name and age (non-empty value).";
      props.onErrorValidation(true, message);
      return;
    }

    if (enteredAge < 0) {
      message = "Please enter a valid age (>0)";
      props.onErrorValidation(true, message);
      return;
    }
    const data = {
      key: Math.random(),
      username: enteredUsername,
      age: enteredAge,
    };
    props.onFormInput(data);
    setEnteredUsername("");
    setEnteredAge("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles["form-input"]}>
        <div className={styles["form-input__fields"]}>
          <label className={styles.label}>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label className={styles.label}>Age (Years)</label>
          <input type="number" value={enteredAge} onChange={ageChangeHandler} />
        </div>
        <button className={styles.button} type="submit">
          Add User
        </button>
      </div>
    </form>
  );
};

export default InputForm;
