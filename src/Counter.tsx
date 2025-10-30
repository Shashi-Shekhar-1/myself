import { useEffect } from "react";
import { useState } from "react";
const Counter = ({ count, data }) => {
  const handleCounter = () => {
    console.log("handleCounter Called");
  };
  useEffect(() => {
    handleCounter();
  }, []);

  return (
    <div>
      <h2>
        <u>Handle side effects of useEffect Hook</u>
      </h2>
      <h1>Counter Component {count}</h1>
      <h1>Data Value {data}</h1>
    </div>
  );
};

export function Pounter() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  return (
    <div
      style={{
        border: "2px solid black",
        marginLeft: "900px",
        paddingLeft: "100px",
      }}
    >
      <Counter count={count} data={data} />
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <button onClick={() => setData(data + 1)}>Data</button>
    </div>
  );
}
export default Counter;
