const mongoose = require("mongoose");

// Modelo para guardar los tickets de soporte

const ticketSchema = new mongoose.Schema({

    numeroTicket: {
        type: String,
        required: true,
        unique: true
    },

    titulo: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    prioridad: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        default: "Pendiente"
    },

    // Código del empleado responsable del caso
    responsable: {
        type: String,
        required: true
    },

    fechaCreacion: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Ticket", ticketSchema);