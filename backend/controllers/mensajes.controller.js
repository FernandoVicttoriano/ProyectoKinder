const fs = require("fs");
const path = require("path");

const rutaMensajes = path.join(
  __dirname,
  "../data/mensajes.json"
);

const leerMensajes = () => {

  const datos = fs.readFileSync(
    rutaMensajes,
    "utf8"
  );

  return JSON.parse(datos);

};

const guardarMensajes = (mensajes) => {

  fs.writeFileSync(
    rutaMensajes,
    JSON.stringify(
      mensajes,
      null,
      2
    )
  );

};

const obtenerMensajes = (req, res) => {
  

  const mensajes = leerMensajes();

  res.json(mensajes);

};
const crearMensaje = (req, res) => {

  const mensajes = leerMensajes();

  const { nombre, correo, mensaje } = req.body;

  const nuevoMensaje = {
    id: Date.now(),
    nombre,
    correo,
    mensaje,
    fecha: new Date()
  };

  mensajes.push(nuevoMensaje);

  guardarMensajes(mensajes);

  console.log("===== NUEVO MENSAJE =====");
  console.log(nuevoMensaje);

  res.json({
    exito: true,
    mensaje: "Mensaje recibido correctamente"
  });

};

const eliminarMensaje = (req, res) => {

  const mensajes = leerMensajes();

  const id = Number(req.params.id);

  const indice = mensajes.findIndex(
    mensaje => mensaje.id === id
  );

  if (indice === -1) {

    return res.status(404).json({
      mensaje: "Mensaje no encontrado"
    });

  }

  mensajes.splice(indice, 1);
  
  guardarMensajes(mensajes);

  res.json({
    mensaje: "Mensaje eliminado"
  });

};

module.exports = {
  obtenerMensajes,
  crearMensaje,
  eliminarMensaje
};