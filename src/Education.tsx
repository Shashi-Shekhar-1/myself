import { useState } from "react";
function Education() {
  const [education, setEducation] = useState("");

  const myEducation = () => {
    setEducation(
      <div style={{ color: "red" }}>
        Matriculation - V.P.M Gyan Niketan School <br /> Intermediat- D.P.S
        Ranchi
        <br /> B.tech- B.I.T Sindri,Current Year 1st"
      </div>
    );
  };
  return (
    <div>
      <h2>{education}</h2>
      <button onClick={myEducation}>My Education!!</button>
    </div>
  );
}
export default Education;
