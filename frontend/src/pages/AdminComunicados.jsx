import { useState, useEffect } from "react";
import axios from "axios";

function AdminComunicados() {

  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");
  const [comunicados, setComunicados] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  const API_URL = "http://localhost:3000/comunicados";
  const ADMIN_KEY = "kinder2026_super_secreta";

  // 🔄 Cargar comunicados
  const cargarComunicados = async () => {

    try {

      const respuesta = await axios.get(API_URL);
      setComunicados(respuesta.data);

    } catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {
    cargarComunicados();
  }, []);

  // ➕ Crear comunicado
  const crearComunicado = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        API_URL,
        { titulo, contenido },
        {
          headers: {
            "x-admin-key": ADMIN_KEY
          }
        }
      );

      setTitulo("");
      setContenido("");

      cargarComunicados();

    } catch (error) {
      console.error(error);
    }

  };

  // 🗑️ Eliminar comunicado
  const eliminarComunicado = async (id) => {

    try {

      await axios.delete(
        `${API_URL}/${id}`,
        {
          headers: {
            "x-admin-key": ADMIN_KEY
          }
        }
      );

      cargarComunicados();

    } catch (error) {
      console.error(error);
    }

  };

  // ✏️ Activar edición (solo llena formulario)
  const editarComunicado = (comunicado) => {

    setEditandoId(comunicado.id);
    setTitulo(comunicado.titulo);
    setContenido(comunicado.contenido);

  };

  // 💾 Guardar edición
  const guardarEdicion = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `${API_URL}/${editandoId}`,
        {
          titulo,
          contenido
        },
        {
          headers: {
            "x-admin-key": ADMIN_KEY
          }
        }
      );

      setTitulo("");
      setContenido("");
      setEditandoId(null);

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

      {/* FORMULARIO */}
      <form onSubmit={editandoId ? guardarEdicion : crearComunicado}>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          rows="5"
          placeholder="Contenido"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
        />

        <button className="btn btn-success mb-4">
          {editandoId ? "Actualizar Comunicado" : "Crear Comunicado"}
        </button>

      </form>

      {/* LISTA */}
      <h2>Comunicados Existentes</h2>

      {comunicados.map((comunicado) => (
        <div key={comunicado.id} className="card mb-3">

          <div className="card-body">

            <h5>{comunicado.titulo}</h5>
            <p>{comunicado.contenido}</p>

            <button
              className="btn btn-primary me-2"
              onClick={() => editarComunicado(comunicado)}
            >
              Editar
            </button>

            <button
              className="btn btn-danger"
              onClick={() => eliminarComunicado(comunicado.id)}
            >
              Eliminar
            </button>

          </div>

        </div>
      ))}

    </div>
  );

}

export default AdminComunicados;