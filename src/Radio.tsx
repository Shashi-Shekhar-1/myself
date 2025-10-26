import { useState } from "react";
function Radio() {
  const [gender, setGender] = useState("Select above");
  const [city, setCity] = useState("ranchi");

  return (
    <div
      style={{
        border: "2px solid black",
        marginRight: "900px",
        paddingLeft: "100px",
      }}
    >
      <h1>Handle Radio and Dropdown </h1>
      <h3>Select Gender</h3>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        value={"Male"}
        checked={gender == "Male"}
        id="male"
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        value={"Female"}
        checked={gender == "Female"}
        id="Female"
      />
      <label htmlFor="Female">Female</label>
      <h2>Selected Gender:{gender}</h2>
      <br />

      <h3>Select City</h3>
      <select
        onChange={(event) => setCity(event.target.value)}
        defaultValue={"Daltonganj"}
      >
        <option value="Daltonganj.">Daltonganj</option>
        <option value="Ranchi.">Ranchi</option>
        <option value="Bokaro">Bokaro</option>
        <option value="Dhanbad">Dhanbad</option>
      </select>
      <h2>Selected City :{city}</h2>
    </div>
  );
}
export default Radio;
