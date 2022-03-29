import React, { useState } from "react";
import InputForm from "../InputForm/InputForm";
import UsernameAgeList from "../UsernameAgeList/UsernameAgeList";
import styles from "./MainForm.module.css";

const MainForm = (props) => {
  const [formData, setFormData] = useState([]);

  const onFormInput = (data) => {
    setFormData((prevState) => [...prevState, data]);
  };

  return (
    <div className={styles["main-form"]}>
      <div>
        <InputForm
          onFormInput={onFormInput}
          onErrorValidation={props.onErrorValidation}
        />
      </div>
      <div>
        <UsernameAgeList formData={formData} />
      </div>
    </div>
  );
};

export default MainForm;
