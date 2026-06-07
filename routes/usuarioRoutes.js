const express = require("express");
const router = express.Router();

const Usuario = require("../models/Usuario");

console.log(Usuario);

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

    console.log(error);

    res.status(500).json({
      mensaje: "Error al registrar usuario"
    });

  }
});

// Servicio para consultar todos los usuarios
router.get("/", async (req, res) => {
  try {

    // Se consultan todos los usuarios registrados
    const usuarios = await Usuario.find();

    res.json(usuarios);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      mensaje: "Error al consultar usuarios"
    });

  }
});

// Servicio para actualizar un usuario
router.put("/:id", async (req, res) => {
  try {

    // Se busca el usuario por ID y se actualiza la información
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(usuarioActualizado);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      mensaje: "Error al actualizar usuario"
    });

  }
});

// Servicio para eliminar un usuario
router.delete("/:id", async (req, res) => {
  try {

    // Se busca el usuario por ID y se elimina de MongoDB
    await Usuario.findByIdAndDelete(req.params.id);

    res.json({
      mensaje: "Usuario eliminado correctamente"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      mensaje: "Error al eliminar usuario"
    });

  }
});

module.exports = router;