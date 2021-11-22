import { EntityRepository, TreeRepository, } from "typeorm";
import { DBManager } from "../database";
import { Category } from "../entities/Category";

@EntityRepository(Category)
class CategotyRepository
  extends TreeRepository<Category>
{
  async store(name: string, parent: Category){
    try {
      const connection = await DBManager.getConnection();
      const repository = connection.getCustomRepository(CategotyRepository);
      const categoty = repository.create({name,parent});
      await repository.save(categoty);

      const category1 = new Category();

      category1.name = name;
      category1.parent = categoty;

      await repository.save(category1);
    } catch (err) {
      throw console.error(err);
    }
  }
  async list(){
    try {
      const connection = await DBManager.getConnection();
      const repository = connection.getCustomRepository(CategotyRepository);
      const categoty = repository.findTrees();

      return categoty;
    } catch (err) {
      throw console.error(err);
    }
  }
}
export { CategotyRepository };
