const express = require("express");

const router = express.Router();

const {
  obtenerComunicados,
  crearComunicado
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

module.exports = router;