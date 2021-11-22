import { Router } from 'express';
import { CategoriesController } from './controllers/categoriesController';

const router = Router();

const categoriesController = new CategoriesController();

router.post('/categories', categoriesController.create);
router.get('/list-categories', categoriesController.list);

export { router };