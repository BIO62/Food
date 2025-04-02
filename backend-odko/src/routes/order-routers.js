import express from 'express';
import { createOrder } from '../controllers/order/create-order.js';

export const orderRouter = express.Router();

orderRouter.post('/orders', createOrder);

