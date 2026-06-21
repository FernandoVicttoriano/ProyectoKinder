const fs = require("fs");
const path = require("path");

const rutaComunicados = path.join(
  __dirname,
  "../data/comunicados.json"
);

const leerComunicados = () => {

  const datos = fs.readFileSync(
    rutaComunicados,
    "utf8"
  );

  return JSON.parse(datos);

};

const guardarComunicados = (
  comunicados
) => {

  fs.writeFileSync(
    rutaComunicados,
    JSON.stringify(
      comunicados,
      null,
      2
    )
  );

};

const obtenerComunicados = (
  req,
  res
) => {

  const comunicados =
    leerComunicados();

  res.json(comunicados);

};

const crearComunicado = (
  req,
  res
) => {

  const comunicados =
    leerComunicados();

  const {
    titulo,
    contenido
  } = req.body;

  const nuevoComunicado = {
    id: Date.now(),
    titulo,
    contenido,
    fecha: new Date()
  };

  comunicados.push(
    nuevoComunicado
  );

  guardarComunicados(
    comunicados
  );

  res.json({
    mensaje:
      "Comunicado creado correctamente"
  });

};
const eliminarComunicado = (
  req,
  res
) => {

  const comunicados =
    leerComunicados();

  const id =
    Number(req.params.id);

  const indice =
    comunicados.findIndex(
      comunicado =>
        comunicado.id === id
    );

  if (indice === -1) {

    return res.status(404).json({
      mensaje:
        "Comunicado no encontrado"
    });

  }

  comunicados.splice(
    indice,
    1
  );

  guardarComunicados(
    comunicados
  );

  res.json({
    mensaje:
      "Comunicado eliminado"
  });

};

module.exports = {
  obtenerComunicados,
  crearComunicado,
  eliminarComunicado
};