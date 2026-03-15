import { useState, useEffect } from "react";

export default function StarRating({ numOfStars }) {
  const [starIdx, setStarIdx] = useState(0);
  const [hoverIdx, setHoverIdx] = useState(0);
  useEffect(() => {
    console.log(starIdx);
  }, [starIdx]);
  return (
    <>
      {[...Array(numOfStars)].map((_, idx) => {
        return (
          <span
            onClick={() => setStarIdx(idx)}
            key={idx}
            className={`stars ${
              idx <= starIdx || idx <= hoverIdx ? "active" : ""
            }
           
            `}
            onMouseEnter={() => setHoverIdx(idx)}
            onMouseLeave={() => setHoverIdx(0)}
          >
            &#128970;
          </span>
        );
      })}
    </>
  );
}
