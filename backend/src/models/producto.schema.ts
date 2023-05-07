import mongoose, {Schema} from "mongoose";
import { IProducto } from "./producto.model";

var schema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    imagen: String,
    precio: Number,
    categoria: Schema.Types.ObjectId,
    empresa: Schema.Types.ObjectId,
    subCategorias: String
});

export var ProductosSchema = mongoose.model<IProducto>("productos", schema);