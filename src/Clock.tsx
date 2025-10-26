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
    <div>
      <h1>{time}</h1>
    </div>
  );
};

export default Clock;
