const express = require("express");

const router = express.Router();

const {
  obtenerMensajes,
  crearMensaje,
  eliminarMensaje
} = require(
  "../controllers/mensajes.controller"
);

router.get(
  "/mensajes",
  obtenerMensajes
);

router.post(
  "/contacto",
  crearMensaje
);

router.delete(
  "/mensajes/:id",
  eliminarMensaje
);

module.exports = router;