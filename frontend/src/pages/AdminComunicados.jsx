import { useState, useEffect } from "react";
import axios from "axios";

function AdminComunicados() {

  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [comunicados, setComunicados] = useState([]);

  const cargarComunicados = async () => {

    try {

      const respuesta = await axios.get(
        "http://localhost:3000/comunicados"
      );

      setComunicados(
        respuesta.data
      );

    } catch (error) {

      console.error(error);

    }

  };

  useEffect(() => {

    cargarComunicados();

  }, []);

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

      cargarComunicados();

    } catch (error) {

      console.error(error);

    }

  };

  const eliminarComunicado = async (id) => {

    try {

      await axios.delete(
        `http://localhost:3000/comunicados/${id}`
      );

      cargarComunicados();

    } catch (error) {

      console.error(error);

    }

  };

  return (
    <div className="container">

      <h1 className="mb-4">
        Administrar Comunicados
      </h1>

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
          className="btn btn-success mb-4"
        >
          Crear Comunicado
        </button>

      </form>

      <h2>Comunicados Existentes</h2>

      {comunicados.map(
        (comunicado) => (
          <div
            key={comunicado.id}
            className="card mb-3"
          >
            <div className="card-body">

              <h5>
                {comunicado.titulo}
              </h5>

              <p>
                {comunicado.contenido}
              </p>

              <button
                className="btn btn-danger"
                onClick={() =>
                  eliminarComunicado(
                    comunicado.id
                  )
                }
              >
                Eliminar
              </button>

            </div>
          </div>
        )
      )}

    </div>
  );

}

export default AdminComunicados;