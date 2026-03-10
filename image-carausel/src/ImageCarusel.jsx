import { useEffect, useRef, useState } from "react";
import { data } from "./data.js";

const numOfData = data.length;

const ImageCarusel = () => {
  const [dataset, setDataset] = useState(data);
  const [idx, setIdx] = useState(10);
  const idRef = useRef(null);

  const prevBtn = () => {
    if (idx - 1 < 0) {
      setIdx((prev) => prev + 1);
    } else setIdx(idx - 1);
  };
  const nextBtn = () => {
    setIdx((prev) => (prev + 1 >= numOfData ? 0 : prev + 1));
  };

  useEffect(() => {
    idRef.current = setInterval(nextBtn, 1000);
    return () => {
      clearInterval(idRef.current);
    };
  }, []);
  return (
    <>
      <div
        onMouseEnter={() => clearInterval(idRef.current)}
        onMouseOut={() => (idRef.current = setInterval(nextBtn, 1000))}
        className="container"
      >
        <div className="btn-prev" onClick={prevBtn}>
          {"<"}
        </div>
        <img src={data[idx].download_url} alt="image" />
        <div className="btn-next" onClick={nextBtn}>
          {">"}
        </div>
      </div>
    </>
  );
};

export default ImageCarusel;
