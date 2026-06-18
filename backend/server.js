const express = require("express");
const cors = require("cors");

const app = express();

const mensajesRoutes = require(
  "./routes/mensajes.routes"
);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

  res.json({
    mensaje: "Servidor Kinder funcionando"
  });

});

app.use(mensajesRoutes);

app.listen(3000, () => {

  console.log(
    "Servidor ejecutándose en http://localhost:3000"
  );

});