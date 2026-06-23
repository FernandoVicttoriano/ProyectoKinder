const express = require("express");

const router = express.Router();

const verificarAdmin = require(
  "../middleware/auth.middleware"
);

const {
  obtenerComunicados,
  crearComunicado,
  eliminarComunicado,
  actualizarComunicado
} = require(
  "../controllers/comunicados.controller"
);

router.get("/comunicados", obtenerComunicados);

router.post(
  "/comunicados",
  verificarAdmin,
  crearComunicado
);

router.delete(
  "/comunicados/:id",
  verificarAdmin,
  eliminarComunicado
);

router.put(
  "/comunicados/:id",
  verificarAdmin,
  actualizarComunicado
);
module.exports = router;