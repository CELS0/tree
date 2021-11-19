import { getCustomRepository } from "typeorm";
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
        const categoriesRepository = getCustomRepository(CategoriesRepository);

        const test = categoriesRepository.create({ name: "a1" });
        await categoriesRepository.save(test);

        const test1 = categoriesRepository.create({ name: "a11", parent:test });
        await categoriesRepository.save(test1);
        // const a1 = new Category();
        // a1.name = "a1";
        // const y = await categoriesRepository.save(a1);

        // const a11 = new Category();
        // a11.name = "a11";
        // a11.parent = a1;
        // await categoriesRepository.save(a11);


        // const trees = await categoriesRepository.findTrees();
        const tree = await categoriesRepository.find();
        return tree;
    }
}

export { CategoriesService }