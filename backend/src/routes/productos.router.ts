import express from 'express';
import { obtenerProducto, obtenerProductos, crearProducto, obtenerProductoPorCategoriaEmpresa, obtenerProductosCategoria, obtenEseProducto } from '../controllers/productos.controller';

const router = express.Router();

router.get('/', obtenerProductos);
router.get('/:id', obtenerProducto);
router.get('/categoria/:idCategoria', obtenerProductosCategoria);
router.get('/:idCategoria/:idEmpresa', obtenerProductoPorCategoriaEmpresa);
router.post('/', crearProducto);
router.get('/filtro', obtenEseProducto);

export default router;