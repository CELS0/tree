import { Category } from "../entities/Category";
import { CategotyRepository } from "../repositories/CategoriesRepository";
class CategoriesService {
    async create(name: string, parent: Category) {
          const categotyRepository = new CategotyRepository()
          await categotyRepository.store(name, parent);
    }
    async list() {
        const categotyRepository = new CategotyRepository();
       const tree = await categotyRepository.list();

       return tree;
  }
}

export { CategoriesService }