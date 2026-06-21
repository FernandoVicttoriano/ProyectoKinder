const express = require("express");

const router = express.Router();

const {
  obtenerComunicados,
  crearComunicado,
  eliminarComunicado
} = require(
  "../controllers/comunicados.controller"
);

router.get(
  "/comunicados",
  obtenerComunicados
);

router.post(
  "/comunicados",
  crearComunicado
);

router.delete(
  "/comunicados/:id",
  eliminarComunicado
);
module.exports = router;