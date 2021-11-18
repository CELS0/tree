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


        const categotyRequest1: ICategory = {
            name: 'name 1',
            parent: category,
        };

        const category1 = categoriesRepository.create(categotyRequest1);
        await categoriesRepository.save(category1);


        const categotyRequest2: ICategory = {
            name: 'name 2',
            parent: category,
        };

        const category2 = categoriesRepository.create(categotyRequest2);
        await categoriesRepository.save(category2);

        const categotyRequest3: ICategory = {
            name: 'name 3',
            parent: category2,
        };

        const category3 = categoriesRepository.create(categotyRequest3);
        await categoriesRepository.save(category3);


        const categotyRequest4: ICategory = {
            name: 'name 4',
            parent: category2,
        };

        const category4 = categoriesRepository.create(categotyRequest4);
        await categoriesRepository.save(category4);



        const trees = await categoriesRepository.find()
        // const categotyRequest2: ICategory = {
        //     name: 'name 2' ,
        //     parent: category1,
        // };
        // const category2 = categoriesRepository.create(categotyRequest2);
        // await categoriesRepository.save(category2);

        // const categotyRequeste3: ICategory = {
        //     name: 'name 3' ,
        //     parent: category1,
        // };
        // const category3 = categoriesRepository.create(categotyRequeste3);
        // await categoriesRepository.save(category3);



        return trees;
    }
}

export { CategoriesService }