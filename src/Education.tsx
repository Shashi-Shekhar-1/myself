import { useState } from "react";
function Education() {
  const [education, setEducation] = useState("");

  const myEducation = () => {
    setEducation(
      "Matriculation - V.P.M Gyan Niketan School ,,Intermediat -D.P.S Ranchi ,,B.tech- B.I.T Sindri,Current Year 1st"
    );
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
        <h2>{education}</h2>
        <button onClick={myEducation}>My Education!!</button>
      </center>
    </div>
  );
}
export default Education;
