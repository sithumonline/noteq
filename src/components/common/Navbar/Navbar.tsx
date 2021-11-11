import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" to="/">
            Home
          </Link>
          <Link
            className="mr-5 hover:text-gray-900"
            to={"/update/" + window.location.pathname.split("/")[2]}
          >
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}
