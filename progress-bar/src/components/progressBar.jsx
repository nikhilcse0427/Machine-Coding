import { useState, useEffect } from "react";

export default function ProgressBar() {
  const [bar, setBar] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("bar keep updating...");
      setBar((prev) => {
        if (prev == 100) {
          clearInterval(id);
          return prev;
        }
        return prev + 10;
      });
    }, 1000);
  }, []);
  return (
    <>
      <div className="container">
        <div style={{ width: `${bar}%` }} className="inner-container"></div>
      </div>
    </>
  );
}
