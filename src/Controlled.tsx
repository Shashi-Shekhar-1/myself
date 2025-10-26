import { useState } from "react";

function Controlled() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      style={{
        border: "2px solid black",
        marginRight: "900px",
        paddingLeft: "100px",
      }}
    >
      <h1>Controlled Component</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Your Name"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter Your Password"
      />
      <br />
      <br />

      <button>Submit</button>
      <button
        onClick={() => {
          setName("");
          setPassword("");
        }}
      >
        Clear
      </button>
      <h3>{name}</h3>
      <h3>{password}</h3>
    </div>
  );
}

export default Controlled;
