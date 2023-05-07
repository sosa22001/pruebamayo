import mongoose, { Schema } from "mongoose";
import { IEmpresa } from "./empresa.model";

const schema = new Schema<IEmpresa> ({
    nombre: String,
    descripcion: String,
    imagen: String,
    productos: Array<Schema.Types.ObjectId>,
    telefono: String,
    region: String
})

export const Empresaschema = mongoose.model('empresas', schema);