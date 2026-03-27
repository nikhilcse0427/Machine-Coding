import "./styles.css";
import { useState } from "react";
import { explorerData } from "./data.js";

const List = ({ data, addFolder }) => {
  const [isOpen, setIsOpen] = useState({});

  return data.map((node) => (
    <div key={node.id}>
      <span
        onClick={() =>
          setIsOpen((prev) => ({
            ...prev,
            [node.id]: !prev[node.id],
          }))
        }
        style={{ paddingRight: "10px", cursor: "pointer" }}
      >
        {node.isFolder ? "+" : "-"}
      </span>

      {node.name}

      {node.isFolder && <span onClick={() => addFolder(node.id)}>📁</span>}

      {node.isFolder && isOpen[node.id] && node.children.length > 0 && (
        <div style={{ paddingLeft: "10px" }}>
          <List data={node.children} addFolder={addFolder} />
        </div>
      )}
    </div>
  ));
};

export default function App() {
  const [data, setData] = useState(explorerData);

  const addFolder = (nodeId) => {
    const folderName = prompt("Enter folder name");

    const updateData = (list) => {
      return list.map((node) => {
        // ✅ match node
        if (node.id === nodeId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now(),
                name: folderName,
                isFolder: true,
                children: [],
              },
            ],
          };
        }

        // ✅ recursion
        if (node.children) {
          return {
            ...node,
            children: updateData(node.children),
          };
        }

        // ✅ unchanged
        return node;
      });
    };

    setData((prev) => updateData(prev));
  };

  return (
    <div className="App">
      <h1>File/Folder Explorer</h1>
      <div className="container">
        <List data={data} addFolder={addFolder} />
      </div>
    </div>
  );
}
