import "../styles.css";
import { useEffect, useState, useRef } from "react";

const TypeAhead = () => {
  const state = {
    loading: "Loading...",
    success: "Success",
    error: "Error",
  };
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(state.loading);
  const cashe = useRef({});

  const abortController = new AbortController();
  const { signal } = abortController;

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;
      try {
        if (cashe.current[data.product]) {
          console.log("no need of api call");
          return;
        }
        setStatus(state.loading);
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=10`
        );
        const res = await response.json();
        setData(res.products);
        cashe.current[query] = data.product;
        setStatus(state.success);
        console.log("API call");
      } catch (error) {
        if (error.type == "AbortError") {
          setStatus(state.error);
        }
      }
    };
    const timerId = setTimeout(fetchData, 1000);
    return () => {
      clearTimeout(timerId);
      abortController.abort();
    };
  }, [query]);
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <br />
      {status === state.loading && <div>Loading...</div>}
      {status === state.error && state.error}
      {status === state.success && (
        <div className="container">
          <ul>
            {data.map((product) => (
              <li key={product.id}>
                <p>{product.title}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default TypeAhead;
