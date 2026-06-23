import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {

  const navigate = useNavigate();
  const isLogged = localStorage.getItem("login");

  const cerrarSesion = () => {

    localStorage.removeItem("login");
    navigate("/login");

  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">

          <img
            src={logo}
            alt="logo kinder"
            style={{
              height: "40px",
              width: "40px",
              objectFit: "contain"
            }}
          />

          <span className="fw-bold">
            Kinder
          </span>

        </Link>

        {/* BOTÓN MOBILE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENÚ */}
        <div className="collapse navbar-collapse" id="menu">

          {/* IZQUIERDA */}
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">
                Nosotros
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/galeria">
                Galería
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/comunicados">
                Comunicados
              </Link>
            </li>

          </ul>

          {/* DERECHA (ADMIN) */}
          <div className="d-flex align-items-center">

            {isLogged ? (
              <>
                <Link className="btn btn-warning btn-sm me-2" to="/admin/comunicados">
                  Admin Comunicados
                </Link>

                <Link className="btn btn-warning btn-sm me-2" to="/admin/mensajes">
                  Admin Mensajes
                </Link>

                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={cerrarSesion}
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link className="btn btn-outline-info btn-sm" to="/login">
                Login
              </Link>
            )}

          </div>

        </div>

      </div>

    </nav>
  );

}

export default Navbar;