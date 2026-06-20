require("dotenv").config();

const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const comunicadosRoutes = require("./routes/comunicados.routes");

const app = express();

const mensajesRoutes = require(
  "./routes/mensajes.routes"
);

app.use(cors());
app.use(express.json());

app.use(logger);

app.get("/", (req, res) => {

  res.json({
    mensaje: "Servidor Kinder funcionando"
  });

});

app.use(mensajesRoutes);
app.use(comunicadosRoutes);

app.use(errorHandler);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(
    `Servidor ejecutándose en http://localhost:${PORT}`
  );

});