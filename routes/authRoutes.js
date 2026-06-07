const express = require("express");
const router = express.Router();

const AuthUser = require("../models/AuthUser");

// REGISTRO DE USUARIOS

router.post("/register", async (req, res) => {

    try {

        // Se verifica si el correo ya existe
        const existeUsuario = await AuthUser.findOne({
            correo: req.body.correo
        });

        if (existeUsuario) {

            return res.status(400).json({
                mensaje: "El correo ya está registrado"
            });

        }

        // Se crea un nuevo usuario
        const nuevoUsuario = new AuthUser({
            nombre: req.body.nombre,
            correo: req.body.correo,
            password: req.body.password
        });

        // Se guarda en MongoDB
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

// INICIO DE SESIÓN

router.post("/login", async (req, res) => {

    try {

        // Buscar usuario por correo
        const usuario = await AuthUser.findOne({
            correo: req.body.correo
        });

        if (!usuario) {

            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });

        }

        // Validar contraseña
        if (usuario.password !== req.body.password) {

            return res.status(401).json({
                mensaje: "Contraseña incorrecta"
            });

        }

        res.status(200).json({
            mensaje: "Login exitoso",
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                correo: usuario.correo
            }
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error al iniciar sesión"
        });

    }

});

// RECUPERAR CONTRASEÑA

router.post("/recovery", async (req, res) => {

    try {

        const usuario = await AuthUser.findOne({
            correo: req.body.correo
        });

        if (!usuario) {

            return res.status(404).json({
                mensaje: "Correo no registrado"
            });

        }

        res.status(200).json({
            mensaje: "Correo encontrado",
            nombre: usuario.nombre
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error al recuperar cuenta"
        });

    }

});


// ACTUALIZAR CONTRASEÑA

router.put("/reset-password", async (req, res) => {

    try {

        const usuario = await AuthUser.findOne({
            correo: req.body.correo
        });

        if (!usuario) {

            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });

        }

        usuario.password = req.body.password;

        await usuario.save();

        res.status(200).json({
            mensaje: "Contraseña actualizada correctamente"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error al actualizar contraseña"
        });

    }

});

module.exports = router;