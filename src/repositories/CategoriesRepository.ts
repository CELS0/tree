import { EntityRepository, TreeRepository} from "typeorm";

import { Category } from "../entities/Category";

@EntityRepository(Category)
class CategoriesRepository extends TreeRepository<Category> {}
export { CategoriesRepository }