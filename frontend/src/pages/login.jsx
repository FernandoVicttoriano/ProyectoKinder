import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const iniciarSesion = async (e) => {

    e.preventDefault();

    try {

      const respuesta = await axios.post(
        "http://localhost:3000/login",
        {
          usuario,
          password
        }
      );

      if (respuesta.data.exito) {

        localStorage.setItem(
          "login",
          "true"
        );

        navigate("/admin/comunicados");

      } else {

        alert("Credenciales incorrectas");

      }

    } catch (error) {

      console.error(error);

      alert("Error en el login");

    }

  };

  return (
    <div className="container">

      <h1>Login Administrador</h1>

      <form onSubmit={iniciarSesion}>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) =>
            setUsuario(e.target.value)
          }
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Contraseña"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button className="btn btn-primary">
          Iniciar sesión
        </button>

      </form>

    </div>
  );

}

export default Login;