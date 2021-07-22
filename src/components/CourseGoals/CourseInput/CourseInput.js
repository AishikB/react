import React, { useState } from "react";
import styles from './CourseInput.module.css'
import Button from "../../UI/Button/Button";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.value) setIsValid(true);
    else setIsValid(false);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue?.trim()?.length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    props.onAddGoal(enteredValue);
  };
  // styles are returned as a object
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
