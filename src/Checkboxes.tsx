import { useState } from "react";

function Checkboxes() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != event.target.value)]);
    }
  };

  return (
    <div
      style={{
        border: "2px solid black",
        marginLeft: "900px",
        paddingLeft: "100px",
      }}
    >
      <h1>Handle Checkbox</h1>
      <h2 style={{ color: "blue" }}>
        <u>Select Your Skill</u>
      </h2>

      <input
        onChange={handleSkills}
        type="checkbox"
        id="html css"
        value="HTML & CSS"
      />
      <label htmlFor="html css">HTML & CSS</label>
      <br />
      <input
        onChange={handleSkills}
        type="checkbox"
        id="java"
        value="JavaScript"
      />
      <label htmlFor="java">JavaScript</label>
      <br />
      <input
        onChange={handleSkills}
        type="checkbox"
        id="python"
        value="Python"
      />
      <label htmlFor="python">Python</label>
      <br />
      <input onChange={handleSkills} type="checkbox" id="react" value="React" />
      <label htmlFor="react">React</label>

      <h1>{skills.toString()}</h1>
    </div>
  );
}
export default Checkboxes;
