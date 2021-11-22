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
    } catch (err) {
      throw console.error(err);
    }
  }
  async list(){
    try {
      const connection = await DBManager.getConnection();
      const repository = connection.getCustomRepository(CategotyRepository);
      const categoty = repository.find({relations:['children']});

      return categoty;
    } catch (err) {
      throw console.error(err);
    }
  }
}
export { CategotyRepository };
