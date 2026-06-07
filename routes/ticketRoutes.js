const express = require("express");
const router = express.Router();

const Ticket = require("../models/Ticket");

console.log(Ticket); 

// Servicio para crear un ticket de soporte
router.post("/", async (req, res) => {
try {

    // Se crea un nuevo ticket con los datos enviados
    const nuevoTicket = new Ticket(req.body);

    // Se guarda el ticket en MongoDB
    await nuevoTicket.save();

    res.status(201).json({
        mensaje: "Ticket creado correctamente"
    });

} catch (error) {

    res.status(500).json({
        mensaje: "Error al crear el ticket"
    });

}

});

// Servicio para consultar todos los tickets
router.get("/", async (req, res) => {
try {


    const tickets = await Ticket.find();

    res.json(tickets);

} catch (error) {

    res.status(500).json({
        mensaje: "Error al consultar los tickets"
    });

}

});

// Servicio para actualizar un ticket
router.put("/:id", async (req, res) => {
try {

    const ticketActualizado = await Ticket.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.json(ticketActualizado);

} catch (error) {

    res.status(500).json({
        mensaje: "Error al actualizar el ticket"
    });

}

});

// Servicio para eliminar un ticket
router.delete("/:id", async (req, res) => {
try {

    await Ticket.findByIdAndDelete(req.params.id);

    res.json({
        mensaje: "Ticket eliminado correctamente"
    });

} catch (error) {

    res.status(500).json({
        mensaje: "Error al eliminar el ticket"
    });

}
});

module.exports = router;
