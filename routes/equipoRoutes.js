const express = require("express");
const router = express.Router();

const Equipo = require("../models/Equipo");

console.log(Equipo); 

// Servicio para registrar un equipo
router.post("/", async (req, res) => {
  try {

    const nuevoEquipo = new Equipo(req.body);

    await nuevoEquipo.save();

    res.status(201).json({
      mensaje: "Equipo registrado correctamente"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      mensaje: "Error al registrar equipo"
    });

  }
});

// Servicio para consultar todos los equipos
router.get("/", async (req, res) => {
  try {

    const equipos = await Equipo.find();

    res.json(equipos);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      mensaje: "Error al consultar equipos"
    });

  }
});

// Servicio para actualizar un equipo
router.put("/:id", async (req, res) => {
  try {

    const equipoActualizado = await Equipo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(equipoActualizado);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      mensaje: "Error al actualizar equipo"
    });

  }
});

module.exports = router;