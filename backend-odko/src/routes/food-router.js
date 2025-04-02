import express from 'express';
import { authorizationMiddleware } from '../middleware/authorization.js';
import { createFood } from '../controllers/foods/create-food.js';
import { getFoods } from '../controllers/foods/get-food.js';
import { getFoodsByCategory } from '../controllers/foods/getFoodbyCate.js';
import { getFoodsByCategoryId } from '../controllers/foods/getFoodbyId.js';
import { editFood } from '../controllers/foods/edit-food.js';

export const foodRouter = express.Router();

foodRouter.get('/foods/:category', getFoods);
foodRouter.get('/foods/category', getFoodsByCategory);
foodRouter.post('/', authorizationMiddleware, createFood);
foodRouter.get('/category/:categoryId', getFoodsByCategoryId);
foodRouter.put('/foods/:id', editFood);