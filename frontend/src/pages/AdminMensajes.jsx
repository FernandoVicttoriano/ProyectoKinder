import axios from "axios";
import { useEffect, useState } from "react";

function AdminMensajes() {

  const [mensajes, setMensajes] = useState([]);

  const eliminarMensaje = async (id) => {

    try {

      await axios.delete(
        `http://localhost:3000/mensajes/${id}`
      );

      setMensajes(
        mensajes.filter(
          mensaje => mensaje.id !== id
        )
      );

    } catch (error) {

      console.error(error);

    }

  };

  useEffect(() => {

    const obtenerMensajes = async () => {

      try {

        const respuesta = await axios.get(
          "http://localhost:3000/mensajes"
        );

        setMensajes(respuesta.data);

      } catch (error) {

        console.error(error);

      }

    };

    obtenerMensajes();

  }, []);

  return (
    <div className="container mt-4">

      <h1>Mensajes Recibidos</h1>

      {mensajes.map((mensaje) => (
        <div
          key={mensaje.id}
          className="card mb-3"
        >
          <div className="card-body">

            <h5>{mensaje.nombre}</h5>

            <p>{mensaje.correo}</p>

            <p>{mensaje.mensaje}</p>

            <button
              className="btn btn-danger"
              onClick={() =>
                eliminarMensaje(mensaje.id)
              }
            >
              Eliminar
            </button>

          </div>
        </div>
      ))}

    </div>
  );
}

export default AdminMensajes;