import { useState } from "react";
function Skill() {
  const [skill, setSkill] = useState("");
  const mySkill = () => {
    setSkill("I know HTML,CSS and \n I am Learning JS & React");
  };
  return (
    <div
      style={{
        color: "Green",
        border: "2px solid black",
        marginLeft: "900px",
        paddingLeft: "100px",
      }}
    >
      <center>
        <h2>{skill}</h2>
        <button onClick={mySkill}>About Skill!!</button>
      </center>
    </div>
  );
}
export default Skill;
