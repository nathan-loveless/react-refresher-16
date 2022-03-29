import React from "react";
import styles from "./UsernameAgeItem.module.css";

const UsernameAgeItem = (props) => {
  return (
    <div className={styles["item-container"]}>
      <div className={styles.item}>
        {props.username} {`${props.age} years old`}
      </div>
    </div>
  );
};

export default UsernameAgeItem;
