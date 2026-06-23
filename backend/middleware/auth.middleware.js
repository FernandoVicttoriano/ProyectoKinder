const verificarAdmin = (req, res, next) => {

  console.log("HEADER:", req.headers["x-admin-key"]);
  console.log("ENV:", process.env.ADMIN_KEY);

  const claveAdmin = req.headers["x-admin-key"];

  if (claveAdmin !== process.env.ADMIN_KEY) {

    return res.status(401).json({
      exito: false,
      mensaje: "No autorizado"
    });

  }

  next();

};

module.exports = verificarAdmin;