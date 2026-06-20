const errorHandler = (
  err,
  req,
  res,
  next
) => {

  console.error("ERROR:", err);

  res.status(500).json({
    error: true,
    mensaje: "Error interno del servidor"
  });

};

module.exports = errorHandler;