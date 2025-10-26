import Intro from "./Intro";
import Toggle from "./Toggle";
import Skill from "./Skill";
import Input from "./Input";
import Controlled from "./Controlled";

import Education from "./Education";
import "./App.css";

function App() {
  return (
    <div>
      <Intro />
      <Education />
      <Skill />
      {/* <Clock /> */}
      <Toggle />
      <Input />
      <Controlled />
    </div>
  );
}
export default App;
