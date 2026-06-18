import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <div className="container">

        <Link className="navbar-brand" to="/">
          <>
            <img
                src={logo}
                alt="Logo"
                width="40"
                className="me-2"
            />
        Kinder 2026
            </>
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/">
            Inicio
          </Link>

          <Link className="nav-link" to="/nosotros">
            Nosotros
          </Link>

          <Link className="nav-link" to="/galeria">
            Galería
          </Link>

          <Link className="nav-link" to="/contacto">
            Contacto
          </Link>
          <Link className="nav-link" to="/comunicados">
            Comunicados
          </Link>

          <Link className="nav-link" to="/admin/mensajes">
            Administración
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;