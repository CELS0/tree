import { Router } from 'express';
import { CategoriesController } from './controllers/categoriesController';

const router = Router();

const categoriesController = new CategoriesController();

router.post('/categories', categoriesController.handle);

export { router };