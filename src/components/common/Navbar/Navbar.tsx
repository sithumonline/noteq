import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav>
        <Link to="/">Home</Link>
        <Link to={"/update/" + window.location.pathname.split("/")[2]}>Profile</Link>
      </nav>
  );
}
