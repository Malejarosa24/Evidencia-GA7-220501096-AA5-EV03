const mongoose = require("mongoose");

// Modelo para los usuarios que ingresan al sistema

const authUserSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },

    correo: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true
    }

});



module.exports = mongoose.model("AuthUser", authUserSchema);