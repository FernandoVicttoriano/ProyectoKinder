const mensajes = require("../data/mensajes");

const obtenerMensajes = (req, res) => {

  res.json(mensajes);

};

const crearMensaje = (req, res) => {

  const { nombre, correo, mensaje } = req.body;

  const nuevoMensaje = {
    id: Date.now(),
    nombre,
    correo,
    mensaje,
    fecha: new Date()
  };

  mensajes.push(nuevoMensaje);

  console.log("===== NUEVO MENSAJE =====");
  console.log(nuevoMensaje);

  res.json({
    exito: true,
    mensaje: "Mensaje recibido correctamente"
  });

};

const eliminarMensaje = (req, res) => {

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

  res.json({
    mensaje: "Mensaje eliminado"
  });

};

module.exports = {
  obtenerMensajes,
  crearMensaje,
  eliminarMensaje
};