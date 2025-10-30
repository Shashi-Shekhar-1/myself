import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        border: "5px solid green",
        color: "red",
        borderRadius: "20px",
        marginLeft: "600px",
        marginRight: "600px",
        padding: "5px 40px",
      }}
    >
      <h1>{time}</h1>
    </div>
  );
};

export default Clock;
