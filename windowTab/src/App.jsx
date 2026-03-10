import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const tabs = [
    {
      label: "dashboard",
      content: "This tab contains dashboard page",
    },
    {
      label: "payment",
      content: "This tab contain payment page",
    },
    {
      label: "contact",
      content: "This tab contains contact page",
    },
    {
      label: "profile",
      content: "This tab contains profile page",
    },
  ];

  const [tabNum, setTabNum] = useState(1);
  return (
    <>
      <div className="container">
        <div className="tabBox">
          {tabs.map((tab, id) => (
            <>
              <button onClick={() => setTabNum(id)} key={id}>
                {tab.label}
              </button>
            </>
          ))}
        </div>
        {tabs.map(
          (tab, id) => id === tabNum && <h1 key={id}>{tab.content}</h1>
        )}
      </div>
    </>
  );
}

export default App;
