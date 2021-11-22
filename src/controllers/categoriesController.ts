import { Request, Response } from "express"
import { CategoriesService } from "../services/CategoriesService";


class CategoriesController {
    async create(request: Request, response: Response) {
        const {name, parent} = request.body;
        const categoriesService = new CategoriesService();
        await categoriesService.create(name, parent)
        return response.status(201).json();
    }
    async list(request: Request, response: Response) {
        const categoriesService = new CategoriesService();
        const tree = await categoriesService.list();
        return response.status(201).json(tree);
    }
}

export { CategoriesController }