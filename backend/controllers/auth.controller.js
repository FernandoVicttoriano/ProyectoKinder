const login = (req, res) => {

  const {
    usuario,
    password
  } = req.body;

  if (
    usuario === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASSWORD
  ) {

    return res.json({
      exito: true
    });

  }

  return res.status(401).json({
    exito: false,
    mensaje:
      "Credenciales incorrectas"
  });

};

module.exports = {
  login
};