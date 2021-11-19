import { getCustomRepository, getManager, getTreeRepository } from "typeorm";
import { Category } from "../entities/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface ICategory {
    id?: number;
    name: string;
    children?: Category[];
    parent?: Category;
}


class CategoriesService {
    async create() {
        const manager = getManager();
        const categoriesRepository =  manager.getTreeRepository(Category)

        const tesst: ICategory = {
            name: "celso"
        }
        categoriesRepository.save(tesst)

        const tress = await categoriesRepository.findTrees();

        return tress
    }
}

export { CategoriesService }