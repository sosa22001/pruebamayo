import mongoose from "mongoose";

export interface IMotorista {
    primerNombre: string,
    primerApellido: string,
    email: string,
    contraseña: string,
    telefono: string,
    añosDeExperiencia: number,
    pedidosEntregados: Array<mongoose.Types.ObjectId>,
    aprobado: boolean, 
    carro: string,
    moto: string
}