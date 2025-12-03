const express = require("express");
const app = express();
const animales = ["Perro", "Gato", "Conejo", "Loro"];
app.get("/animales", (req, res) => {
  res.json(animales);
});
app.listen(3000, () => console.log("Servidor en puerto 3000"));
