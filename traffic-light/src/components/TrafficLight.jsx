import "../styles.css";
import { useState, useEffect } from "react";

const colors = ["red", "green", "yellow"];

const TrafficLight = () => {
  const [isActive, setIsActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive((prev) => (prev + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval); // ✅ cleanup to prevent memory leaks
  }, []); // ✅ empty array = runs once on mount

  return (
    <>
      <div className="container">
        {colors.map((color, idx) => (
          <div
            key={idx}
            className="signal-box"
            style={{ backgroundColor: isActive === idx ? color : "white" }}
          ></div>
        ))}
      </div>
    </>
  );
};
export default TrafficLight;
