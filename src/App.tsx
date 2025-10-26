import Intro from "./Intro";
import Toggle from "./Toggle";
import Skill from "./Skill";
import Input from "./Input";
import Controlled from "./Controlled";
import Checkboxes from "./Checkboxes";
import Clock from "./Clock";

import Education from "./Education";
import "./App.css";

function App() {
  return (
    <div>
      <Clock />
      <Intro />
      <Education />
      <Skill />
      {/* <Clock /> */}
      <Toggle />
      <Input />
      <Controlled />
      <Checkboxes />
    </div>
  );
}
export default App;
