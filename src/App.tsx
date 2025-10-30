import Intro from "./Intro";
import Toggle from "./Toggle";
import Skill from "./Skill";
import Input from "./Input";
import Controlled from "./Controlled";
import Checkboxes from "./Checkboxes";
import Clock from "./Clock";
import Radio from "./Radio";
// import Areadetail from "./Areadetail";
import { Pounter } from "./Counter";
import { StudentDashboard } from "./Dashboard";
import Education from "./Education";
import "./App.css";

function App() {
  return (
    <div>
      <Clock />

      <Intro />
      <Education />
      <Skill />

      <Toggle />
      <Input />
      <Controlled />
      <Checkboxes />
      <Radio />
      <Pounter />

      {/* <Areadetail /> */}
      <StudentDashboard />
    </div>
  );
}
export default App;
