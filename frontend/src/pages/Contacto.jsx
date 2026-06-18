import { useState } from "react";
import axios from "axios";

function Contacto() {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarFormulario = async (e) => {

    e.preventDefault();

    try {

      const respuesta = await axios.post(
        "http://localhost:3000/contacto",
        {
          nombre,
          correo,
          mensaje
        }
      );

      alert(respuesta.data.mensaje);

      setNombre("");
      setCorreo("");
      setMensaje("");

    } catch (error) {

      console.error(error);

      alert("Error al enviar");

    }
  };

  return (
    <div>

      <h1>Contacto</h1>

      <form onSubmit={enviarFormulario}>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />

        <button className="btn btn-primary">
          Enviar
        </button>

      </form>

    </div>
  );
}

export default Contacto;