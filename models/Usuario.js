const mongoose = require("mongoose");

// Modelo para guardar los empleados del sistema

const usuarioSchema = new mongoose.Schema({

    codigoEmpleado: {
        type: String,
        required: true,
        unique: true
    },

    nombre: {
        type: String,
        required: true
    },

    correo: {
        type: String,
        required: true
    },

    cargo: {
        type: String,
        required: true
    },

    telefono: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        default: "Activo"
    }

});

module.exports = mongoose.model("Usuario", usuarioSchema);