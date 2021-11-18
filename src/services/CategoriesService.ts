import { getCustomRepository, getManager } from "typeorm";
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
        const categotyRequest: ICategory = {
            name: 'name',
        };

        const category = categoriesRepository.create(categotyRequest);
        await categoriesRepository.save(category);
        const categotyRequest2: ICategory = {
            name: 'name 1',
            parent: category,
        };
        await categoriesRepository.save(categotyRequest2);


        const categotyRequest3: ICategory = {
            name: 'name 3',
            parent: category,
        };
        await categoriesRepository.save(categotyRequest3);


        const categotyRequest4: ICategory = {
            name: 'name 4',
            parent: category,
        };
        await categoriesRepository.save(categotyRequest4);


        const trees = await categoriesRepository.find({ relations: ['children'] })

        return trees;
    }
}

export { CategoriesService }