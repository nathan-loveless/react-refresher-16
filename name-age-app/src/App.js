import React, { useState } from "react";
import ErrorModal from "./components/ErrorModal/ErrorModal";
import MainForm from "./components/MainForm/MainForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const onErrorValidation = (showModal, message) => {
    if (showModal) {
      setShowModal(true);
      setModalMessage(message);
    }
  };

  const okayHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="root">
      {showModal && <ErrorModal onOkay={okayHandler} message={modalMessage} />}
      <MainForm onErrorValidation={onErrorValidation} />
    </div>
  );
}

export default App;
