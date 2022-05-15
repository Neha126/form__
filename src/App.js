// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import Modal from "./Component/Modal";
import Form from "./Component/Form";

function App() {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={false}>
          <Form />
        </Modal>
      )}
      {/* <p>
        {"For Registration Please"}
        <a href="<form>" onClick={() => setShowModal(true)}>
          Click Here
        </a> */}
      {/* </p> */}
    </div>
  );
}

export default App;
