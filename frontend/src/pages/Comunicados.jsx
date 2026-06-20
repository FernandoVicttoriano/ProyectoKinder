import { useEffect, useState } from "react";
import axios from "axios";

function Comunicados() {

  const [comunicados, setComunicados] = useState([]);

  useEffect(() => {

    const cargarComunicados = async () => {

      try {

        const respuesta = await axios.get(
          "http://localhost:3000/comunicados"
        );

        setComunicados(respuesta.data);

      } catch (error) {

        console.error(error);

      }

    };

    cargarComunicados();

  }, []);

  return (
    <div className="container">

      <h1 className="mb-4">
        Comunicados
      </h1>

      {comunicados.length === 0 ? (
        <p>No hay comunicados.</p>
      ) : (
        comunicados.map((comunicado) => (
          <div
            key={comunicado.id}
            className="card mb-3"
          >
            <div className="card-body">

              <h3>{comunicado.titulo}</h3>

              <p>{comunicado.contenido}</p>

            </div>
          </div>
        ))
      )}

    </div>
  );

}

export default Comunicados;