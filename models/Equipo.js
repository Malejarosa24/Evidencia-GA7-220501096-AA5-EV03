const mongoose = require("mongoose");

// Modelo para guardar los equipos tecnológicos de la empresa
const equipoSchema = new mongoose.Schema({

    codigoEquipo: {
        type: String,
        required: true,
        unique: true
    },

    nombreEquipo: {
        type: String,
        required: true
    },

    tipo: {
        type: String,
        required: true
    },

    marca: {
        type: String,
        required: true
    },

    ubicacion: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        default: "Operativo"
    }

});

module.exports = mongoose.model("Equipo", equipoSchema);