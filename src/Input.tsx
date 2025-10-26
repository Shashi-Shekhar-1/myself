import { useState } from "react";
function Input() {
  const [val, setVal] = useState("Shekhar");
  return (
    <div>
      <center>
        <h1>Get Input & Clear </h1>
        <input
          type="text"
          value={val}
          onChange={(event /*parameter*/) =>
            setVal(event.target.value /*whatever the user type*/)
          }
          placeholder="Entyer Name" /*Initial written inside box*/
        />
        <h1>
          {
            val /* dynamic but iniatial show ,what is what is written in line 3rd */
          }
        </h1>
        <button onClick={() => setVal("")}>Clear</button>
      </center>
    </div>
  );
}
export default Input;
