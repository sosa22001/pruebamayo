"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerMotorista = exports.cambiarEstado = exports.MotoristasPendientes = exports.añadirPedido = exports.crearMotorista = exports.obtenerMotoristas = void 0;
const motorista_schema_1 = require("../models/motorista.schema");
// export const obtenerMotorista = (req:Request, res:Response) => {
// MotoristaSchema.findOne({email: req.query.email, contraseña: req.query.contraseña})
// .then(resultado => {
// res.send(resultado);
// res.end();
// })
// .catch(resultado => {
// res.send(resultado);
// })
// }
const obtenerMotoristas = (req, res) => {
    motorista_schema_1.MotoristaSchema.find()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerMotoristas = obtenerMotoristas;
const crearMotorista = (req, res) => {
    const { primerNombre, primerApellido, contraseña, email, añosDeExperiencia, telefono, aprobado, carro, moto } = req.body;
    const nuevoMotorista = new motorista_schema_1.MotoristaSchema({
        primerNombre,
        primerApellido,
        email,
        contraseña,
        añosDeExperiencia,
        telefono,
        aprobado,
        carro,
        moto
    });
    nuevoMotorista.save()
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.crearMotorista = crearMotorista;
const añadirPedido = (req, res) => {
    motorista_schema_1.MotoristaSchema.findById(req.params.id)
        .then(motorista => {
        if (motorista) {
            motorista.pedidosEntregados.push(req.body.id);
            motorista.save()
                .then(result => res.send(result))
                .catch(error => console.log(error));
        }
    })
        .catch(error => console.log(error));
};
exports.añadirPedido = añadirPedido;
const MotoristasPendientes = (req, res) => {
    motorista_schema_1.MotoristaSchema.find({ aprobado: false })
        .then(respuesta => {
        res.send(respuesta);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.MotoristasPendientes = MotoristasPendientes;
const cambiarEstado = (req, res) => {
    motorista_schema_1.MotoristaSchema.updateOne({ _id: req.params.id }, {
        $set: {
            "aprobado": req.body.estado
        }
    }).then(resultado => {
        res.send("Se cambió de estado a un motorista");
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.cambiarEstado = cambiarEstado;
const obtenerMotorista = (req, res) => {
    motorista_schema_1.MotoristaSchema.findOne({ email: req.query.email, contraseña: req.query.contraseña, aprobado: true })
        .then(resultado => {
        res.send(resultado);
        res.end();
    })
        .catch(resultado => {
        res.send(resultado);
    });
};
exports.obtenerMotorista = obtenerMotorista;
