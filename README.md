# NCR NEXUS API

Proyecto desarrollado para la evidencia GA7-220501096-AA5-EV03 del SENA.

Esta API REST fue construida utilizando Node.js, Express y MongoDB Atlas con el fin de gestionar información relacionada con usuarios, tickets de soporte y equipos tecnológicos.

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman
- Git y GitHub

## Módulos desarrollados

### Usuarios
Permite registrar y consultar usuarios del sistema.

Servicios implementados:
- POST /api/usuarios
- GET /api/usuarios

### Tickets de soporte
Permite registrar solicitudes de soporte técnico y actualizar su estado.

Servicios implementados:
- POST /api/tickets
- GET /api/tickets
- PUT /api/tickets/:id

### Equipos 
Permite registrar equipos, consultar la información almacenada y actualizar su estado.

Servicios implementados:
- POST /api/equipos
- GET /api/equipos
- PUT /api/equipos/:id

## Pruebas realizadas

Los servicios fueron probados utilizando Postman verificando:

- Registro de información.
- Consulta de registros.
- Actualización de estados.
- Conexión correcta con MongoDB Atlas.

## Autor

Maria De la Rosa

Tecnólogo en Análisis y Desarrollo de Software

SENA