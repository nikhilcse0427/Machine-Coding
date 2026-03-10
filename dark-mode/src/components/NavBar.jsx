import { Link } from "react-router";

const NavBar = () => {
  return (
    <div class="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};
export default NavBar;
