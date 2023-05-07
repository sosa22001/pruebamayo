import mongoose, { Schema } from "mongoose";
import { IMotorista } from "./motorista.model";

const schema = new Schema<IMotorista>({
    primerNombre: String,
    primerApellido: String,
    email: String,
    contraseña: String,
    telefono: String,
    añosDeExperiencia: Number,
    pedidosEntregados: Array<Schema.Types.ObjectId>,
    aprobado: Boolean,
    carro: String,
    moto: String
})

export const MotoristaSchema = mongoose.model('motoristas', schema);