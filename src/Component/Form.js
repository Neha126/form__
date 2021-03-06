import { useState } from "react";
import "./Form.css";

export default function NewForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setDob("");
  };

  return (
    <form className="new-form">
      <label>
        <span>First Name:</span>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </label>
      <label>
        <span>Last Name:</span>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </label>
      <label>
        <span>E-mail:</span>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Date of Birth:</span>
        <input
          type="date"
          onChange={(e) => setDob(e.target.value)}
          value={dob}
        />
      </label>
      <p>
        <button>Submit</button>
        <button onClick={resetForm}>Reset</button>
      </p>
    </form>
  );
}
