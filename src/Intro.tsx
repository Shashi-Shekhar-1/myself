import { useState } from "react";

function Intro() {
  const [intro, setIntro] = useState("Display Here");
  const handleIntro = () => {
    setIntro(
      <div>
        Hii,I am Shashi Shekhar From
        <br /> Daltongaj Palamu Jharkhand;
      </div>
    );
  };
  return (
    <div>
      <center>
        <u>
          <h1>I am Learning useState</h1>
        </u>

        <h2>{intro}</h2>

        <button onClick={handleIntro}>Shekhar Intro</button>
      </center>
    </div>
  );
}
export default Intro;
