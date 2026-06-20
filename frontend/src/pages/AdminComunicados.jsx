import { useState } from "react";
import axios from "axios";

function AdminComunicados() {

  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const crearComunicado = async (e) => {

    e.preventDefault();

    try {

      const respuesta = await axios.post(
        "http://localhost:3000/comunicados",
        {
          titulo,
          contenido
        }
      );

      alert(respuesta.data.mensaje);

      setTitulo("");
      setContenido("");

    } catch (error) {

      console.error(error);

    }

  };

  return (
    <div className="container">

      <h1>Administrar Comunicados</h1>

      <form onSubmit={crearComunicado}>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Título"
          value={titulo}
          onChange={(e) =>
            setTitulo(e.target.value)
          }
        />

        <textarea
          className="form-control mb-3"
          rows="5"
          placeholder="Contenido"
          value={contenido}
          onChange={(e) =>
            setContenido(e.target.value)
          }
        />

        <button
          className="btn btn-success"
        >
          Crear Comunicado
        </button>

      </form>

    </div>
  );

}

export default AdminComunicados;