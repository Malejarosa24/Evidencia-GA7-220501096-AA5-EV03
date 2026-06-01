const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Permite recibir datos en formato JSON
app.use(express.json());

// Permite la comunicación con otras aplicaciones
app.use(cors());

// Conexión a MongoDB Atlas
mongoose.connect(
  "mongodb+srv://admin:Nexus2026*@cluster0.kseg5xq.mongodb.net/ncrNexusDB?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log("Conectado a MongoDB"))
.catch((error) => console.log(error));

// Importar rutas
const usuarioRoutes = require("./routes/usuarioRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const equipoRoutes = require("./routes/equipoRoutes");

// Rutas de la API
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/equipos", equipoRoutes);

// Puerto donde se ejecutará el servidor
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});