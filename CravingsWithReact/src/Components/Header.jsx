import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg px-4"
      style={{ backgroundColor: "#cc4b0c" }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand text-white fw-bold fs-2" to="/">
          Crav<span style={{ color: "#9acd32" }}>ing</span>
        </Link>

        {/* Right Side */}
        <div className="ms-auto d-flex align-items-center gap-3">
          <Link
            to="/login"
            className="text-white text-decoration-none fw-semibold"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="btn btn-light text-dark px-3"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;