import { useState } from "react";
function Skill() {
  const [skill, setSkill] = useState("");
  const mySkill = () => {
    setSkill("I know HTML,CSS and \n I am Learning JS & React");
  };
  return (
    <div style={{ color: "Green" }}>
      <center>
        <h2>{skill}</h2>
        <button onClick={mySkill}>About Skill!!</button>
      </center>
    </div>
  );
}
export default Skill;
