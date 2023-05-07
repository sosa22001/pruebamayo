import express from 'express';
import {  obtenerMotoristas, crearMotorista, añadirPedido ,MotoristasPendientes,cambiarEstado,obtenerMotorista} from '../controllers/motoristas.controller';

const router = express.Router();


router.get('/', obtenerMotoristas);
router.get('/sesion', obtenerMotorista);
router.get('/pendientes', MotoristasPendientes);
router.post('/', crearMotorista);
router.put('/:id/pedidos', añadirPedido);
router.put('/estado/:id', cambiarEstado);

export default router;