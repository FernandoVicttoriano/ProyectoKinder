function Inicio() {
  return (
    <div>

      <div className="bg-light p-5 rounded text-center">

        <h1>🌈 Bienvenidos a Kinder 2026</h1>

        <p className="lead">
          Aprendemos, jugamos y crecemos juntos.
        </p>

      </div>

      <div className="mt-4">

        <h2>Últimas Actividades</h2>

        <div className="row">

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>Mes del Mar</h5>
                <p>
                  Conocimos animales marinos y creamos acuarios.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>We Tripantu</h5>
                <p>
                  Aprendimos sobre la cultura mapuche.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>Isla de Pascua</h5>
                <p>
                  Descubrimos la cultura Rapa Nui y los moáis.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Inicio;