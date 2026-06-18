import actividad1 from "../assets/actividad1.jpeg";
import actividad2 from "../assets/actividad2.jpg";
import actividad3 from "../assets/actividad3.jpg";

function Galeria() {
  return (
    <div>

      <h1>Galería de Actividades</h1>

      <div className="row">

        <div className="col-md-4 mb-3">
          <img
            src={actividad1}
            className="img-fluid rounded shadow"
            alt=""
          />
        </div>

        <div className="col-md-4 mb-3">
          <img
            src={actividad2}
            className="img-fluid rounded shadow"
            alt=""
          />
        </div>

        <div className="col-md-4 mb-3">
          <img
            src={actividad3}
            className="img-fluid rounded shadow"
            alt=""
          />
        </div>

      </div>

    </div>
  );
}

export default Galeria;