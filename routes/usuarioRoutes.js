const express = require("express");
const router = express.Router();

const Usuario = require("../models/Usuario");

// Servicio para registrar un usuario
router.post("/", async (req, res) => {
  try {

    // Se crea un nuevo usuario con los datos enviados
    const nuevoUsuario = new Usuario(req.body);

    // Se guarda la información en MongoDB
    await nuevoUsuario.save();

    res.status(201).json({
      mensaje: "Usuario registrado correctamente"
    });

  } catch (error) {

    res.status(500).json({
      mensaje: "Error al registrar usuario"
    });

  }
});

// Servicio para consultar todos los usuarios
router.get("/", async (req, res) => {
  try {

    const usuarios = await Usuario.find();

    res.json(usuarios);

  } catch (error) {

    res.status(500).json({
      mensaje: "Error al consultar usuarios"
    });

  }
});

module.exports = router;