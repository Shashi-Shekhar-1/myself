import { useState } from "react";
function Hello() {
  return (
    <div>
      <h1>1. Education is not the preparation Of Life ,It is Life Itself</h1>
      <h1>
        2. Education is the most powerful weapon which you can use to change the
        world
      </h1>
      <h1>3. Tomorrow ,You will get the result of today</h1>
    </div>
  );
}

function Toggle() {
  const [display, setDisplay] = useState(false);

  return (
    <div>
      <center>
        <h2>Toggle In React JS</h2>
        <u>
          <h2 style={{ color: "blue" }}>Motivational Quote</h2>
        </u>

        <button onClick={() => setDisplay(!display)}>Hide&Show</button>
        {display ? <Hello /> : null}
      </center>
    </div>
  );
}
export default Toggle;
