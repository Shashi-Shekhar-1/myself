import { useState } from "react";
function Education() {
  const [education, setEducation] = useState("");

  const myEducation = () => {
    setEducation(
      "Matriculation - V.P.M Gyan Niketan School ,,Intermediat -D.P.S Ranchi ,,B.tech- B.I.T Sindri,Current Year 1st"
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
