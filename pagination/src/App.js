import { useState, useEffect } from "react";
import "./styles.css";

import ProductBox from "./components/productBox";
import Pagination from "./components/pagination";

export default function App() {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=150");
    const jsonData = await data.json();
    setProducts(jsonData.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const PAGE_SIZE = 10;
  const numOfProd = products.length;
  const numOfPage = Math.ceil(numOfProd / PAGE_SIZE);
  const start = currPage * numOfPage;
  const end = start + 10;

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleClickBtn = (n) => {
    setCurrentPage(n);
  };
  return (
    <div className="App">
      {!products.length ? (
        <h1>No products found</h1>
      ) : (
        <div className="container1">
          <h1 style={{ textAlign: "center" }}>Pagination</h1>
          <Pagination
            nextPage={nextPage}
            prevPage={prevPage}
            handleClickBtn={handleClickBtn}
            currPage={currPage}
            numOfPage={numOfPage}
          />
          <div className="container">
            {products.slice(start, end).map((product) => (
              <ProductBox key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
