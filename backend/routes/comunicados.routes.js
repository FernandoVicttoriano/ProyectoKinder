const express = require("express");


const router = express.Router();

const {
  obtenerComunicados,
  crearComunicado,
  eliminarComunicado,
  actualizarComunicado
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

router.put(
  "/comunicados/:id",
  actualizarComunicado
);
module.exports = router;