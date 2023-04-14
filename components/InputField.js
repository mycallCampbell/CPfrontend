import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./InputField.module.css";

export default function InputField() {
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [rating, setRating] = useState("");
  const [ratingError, setRatingError] = useState(false);
  const [doubleError, setDoubleError] = useState(false);
  const [postDBError, setPostDBError] = useState(false);
  const [assignmentValid, setAssignmentValid] = useState(false);
  const [post, setPost] = useState(false);
  const [submitOff, setSubmitOff] = useState(true);

  let data = "";
  // USE EFFECT
  useEffect(() => {
    if (rating === "" || input === "") {
      setSubmitOff(true);
      return;
    } else {
      setSubmitOff(false);
      clearCache();
    }
  }, [rating, input, assignmentValid]);

  // HANDLE CHANGE DETECTION OF ASSIGNMENT INPUT
  const handleChange = (e) => {
    setInput(e.target.value);
    setInputError(false);
    setDoubleError(false);
  };

  // HANDLE CHANG DETECTION OF PRIORITY RATING
  const handleRating = (e) => {
    setRating(e.target.value);
    setDoubleError(false);
    setRatingError(false);
  };

  // FORM VALIDATION
  const validation = () => {
    // DOUBLE ERROR
    if (input === "" && rating === "") {
      setSubmitOff(true);
      setDoubleError(true);
      return;
      // RETAIN RATING VALUE IF INPUT VALUE IS EMPTY
    } else if (rating !== "" && input === "") {
      setInputError(true);
      setRatingError(false);
      return;
      // RETAIN INPUT VALUE IF RATING IS EMPTY
    } else if (input !== "" && rating === "") {
      setRatingError(true);
      setInputError(false);
      return;
    } else if (rating > 10 || rating < 1) {
      setRatingError(true);
      return;
    } else {
      setAssignmentValid(true);
      data = input;
      return;
    }
  };

  const clearCache = () => {
    if (assignmentValid) {
      setPost(true);
      setTimeout(() => {
        setInput("");
        setRating("");
        setAssignmentValid(false);
        setPostDBError(false);
      }, 7000);
    }
  };

  // HANDLE VALIDATION
  const handleSubmit = async (e) => {
    e.preventDefault();
    validation();

    console.log("reached post");
    try {
      const response = await fetch("http://localhost:8000/api/addassignment/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      // setPostDBError(!postDBError);
      console.log(error);
    }
  };

  // RETURN JSX
  return (
    <div className={styles.container}>
      <div className={styles.spaceAboveAssignementLabel}></div>
      <div className={styles.assignmentContainer}>
        <label className={styles.assignmentLabel} htmlFor="name">
          ASSIGNMENT
        </label>
        <div className={styles.textareaContainer}>
          <textarea
            className={styles.textareaField}
            name="assignment"
            type="text"
            placeholder="Assignment*"
            value={input}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      {/* INPUT ERROR MESSAGE*/}
      <div className={inputError ? styles.display : styles.displayNone}>
        YOU HAVE NOT ASSIGNED ANYTHING. PLEASE ENTER ASSIGNMENT BEFORE
        SUBMISSION TO DATABASE
      </div>

      {/* RATING CONTAINER */}
      <div className={styles.ratingContainer}>
        <label className={styles.ratingLabel} htmlFor="name">
          PRIORITY RATING
        </label>
        <div className={styles.ratingInputFieldContainer}>
          <input
            className={styles.ratingField}
            name="priority rating"
            type="number"
            placeholder="Rating out of 10*"
            value={rating}
            onChange={(e) => handleRating(e)}
          />
          {/* FORM SUBMISSION */}
          <form onClick={(e) => handleSubmit(e)}>
            <div className={submitOff ? styles.submitOff : styles.submit}>
              SUBMIT
            </div>
          </form>
        </div>
      </div>

      {/*DOUBLE ERROR MESSAGES */}
      <div className={doubleError ? styles.display : styles.displayNone}>
        THE ASSIGNMENT FIELD AND RATING FIELD ARE EMPTY. PLEASE ENTER AN
        ASSIGNMENT ALONGSIDE A CORRESPONDING RATING VALUE BETWEEN 1 AND 10....
      </div>

      {/* RATING ERROR MESSAGE */}
      <div className={ratingError ? styles.display : styles.displayNone}>
        THE PRIORTY RATING FOR THIS ASSIGNMENT REQUIRES TO BE SET BETWEEN 1 AND
        10. PLEASE RESET....
      </div>

      {/* SUCCESSFUL COMPLETION MESSAGE */}
      <div
        className={
          assignmentValid ? styles.displayValidate : styles.displayNone
        }
      >
        {" CONGRATULATIONS.... YOUR ASSIGNMENT AND PRIORITY RATING OF "}
        <span
          style={{
            fontWeight: "bold",
            color: "#000",
          }}
        >
          {rating}
        </span>
        {" HAS BEEN STORED SUCCESSFULLY TO THE DATABASE"}
      </div>

      {/* SERVER ERROR MESSAGE */}
      <div className={postDBError ? styles.display : styles.displayNone}>
        THERE IS AN ERROR WITH THE DATABASE. PLEASE TRY AGAIN AND IF THE ERROR
        PERSISTS CONSULT VIA....
      </div>

      {/* ASSIGNMENT PAGE LINK */}
      <Link href={"/assignment"}>
        <div className={styles.goToBTN}>GO TO ASSIGNMENTS</div>
      </Link>
    </div>
  );
}
