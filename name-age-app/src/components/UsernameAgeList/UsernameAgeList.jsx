import React from "react";
import UsernameAgeItem from "./UsernameAgeItem";
import styles from "./UsernameAgeList.module.css";

const UsernameAgeList = (props) => {
  return (
    <div className={styles["form-display"]}>
      {props.formData.map((item) => (
        <UsernameAgeItem
          key={item.key}
          username={item.username}
          age={item.age}
        />
      ))}
    </div>
  );
};

export default UsernameAgeList;
