import StarRating from "./components/starRating";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Star rating</h1>
      <StarRating numOfStars={5} />
    </div>
  );
}
