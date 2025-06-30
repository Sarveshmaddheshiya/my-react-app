import { useEffect, useState } from "react";

function Clock({color}) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>This is Clock Component!</h1>
      <h2
      style={{
        color:color,
        backgroundColor:"black",
        width:"250px",
        padding:"10px",
        textAlign:"Center",
        borderRadius:"10px",
        marginLeft:"470px"
      }}
      >Time: {time}</h2>
    </div>
  );
}

export default Clock;
