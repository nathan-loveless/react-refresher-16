import React from "react";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const okayHandler = () => {
    props.onOkay(false, "");
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>Invalid Input</div>
      <div className={styles.content}>{props.message}</div>
      <div className={styles.footer}>
        <button className={styles.button} onClick={okayHandler}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
