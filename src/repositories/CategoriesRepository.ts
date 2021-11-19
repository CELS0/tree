import { EntityRepository, Repository, TreeRepository} from "typeorm";

import { Category } from "../entities/Category";

@EntityRepository(Category)
class CategoriesRepository extends Repository<Category> {}
export { CategoriesRepository }