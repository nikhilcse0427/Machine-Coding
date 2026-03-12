export default function ProductBox({ product }) {
  console.log(product);
  return (
    <>
      <div className="productContainer">
        <img style={{ height: "150px" }} src={product.thumbnail} />
        <h5 style={{ textAlign: "center" }}>{product.title}</h5>
      </div>
    </>
  );
}
