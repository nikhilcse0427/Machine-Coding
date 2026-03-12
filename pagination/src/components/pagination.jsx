export default function Pagination({
  nextPage,
  prevPage,
  handleClickBtn,
  currPage,
  numOfPage,
}) {
  return (
    <div className="pagination-box">
      <button disabled={currPage === 0} onClick={prevPage}>
        «
      </button>
      {[...Array(10)].map((n, idx) => (
        <div
          className={`pagination-btn ${currPage === idx ? "active" : ""}`}
          onClick={() => handleClickBtn(idx)}
        >
          {idx + 1}
        </div>
      ))}
      <button disabled={currPage === 9} onClick={() => nextPage()}>
        »
      </button>
    </div>
  );
}
