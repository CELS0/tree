import { Request, Response } from "express"
import { CategoriesService } from "../services/CategoriesService";


class CategoriesController {
    async handle(request: Request, response: Response) {
        const categoriesService = new CategoriesService();
        const tree = await categoriesService.create()
        return response.status(201).json(tree);
    }
}

export { CategoriesController }