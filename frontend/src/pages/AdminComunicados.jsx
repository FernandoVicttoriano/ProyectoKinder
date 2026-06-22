import { useState, useEffect } from "react";
import axios from "axios";

function AdminComunicados() {

  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [comunicados, setComunicados] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

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

  const editarComunicado = (comunicado) => {

    setEditandoId(
      comunicado.id
    );

    setTitulo(
      comunicado.titulo
    );

    setContenido(
      comunicado.contenido
    );

  };

  const guardarCambios = async (e) => {

    e.preventDefault();

    try {

      const respuesta = await axios.put(
        `http://localhost:3000/comunicados/${editandoId}`,
        {
          titulo,
          contenido
        }
      );

      alert(
        respuesta.data.mensaje
      );

      setEditandoId(null);

      setTitulo("");
      setContenido("");

      cargarComunicados();

    } catch (error) {

      console.error(error);

    }

  };

  const cancelarEdicion = () => {

    setEditandoId(null);

    setTitulo("");

    setContenido("");

  };

  return (
    <div className="container">

      <h1 className="mb-4">
        Administrar Comunicados
      </h1>

      <form
        onSubmit={
          editandoId
            ? guardarCambios
            : crearComunicado
        }
      >

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Título"
          value={titulo}
          onChange={(e) =>
            setTitulo(
              e.target.value
            )
          }
        />

        <textarea
          className="form-control mb-3"
          rows="5"
          placeholder="Contenido"
          value={contenido}
          onChange={(e) =>
            setContenido(
              e.target.value
            )
          }
        />

        <button
          className="btn btn-success"
        >
          {
            editandoId
              ? "Guardar Cambios"
              : "Crear Comunicado"
          }
        </button>

        {
          editandoId && (
            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={
                cancelarEdicion
              }
            >
              Cancelar
            </button>
          )
        }

      </form>

      <hr />

      <h2>
        Comunicados Existentes
      </h2>

      {
        comunicados.map(
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
                  className="btn btn-warning"
                  onClick={() =>
                    editarComunicado(
                      comunicado
                    )
                  }
                >
                  Editar
                </button>

                <button
                  className="btn btn-danger ms-2"
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
        )
      }

    </div>
  );

}

export default AdminComunicados;