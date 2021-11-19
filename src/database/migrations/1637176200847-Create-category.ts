import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCategory1637176200847 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'parentId',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'childrenId',
            type: 'int',
            isNullable: true,
          }
        ],
      }),
    );

    await queryRunner.createForeignKey("categories", new TableForeignKey({
      columnNames: ["parentId"],
      referencedColumnNames: ["id"],
      referencedTableName: "categories",
      onDelete: "CASCADE"
  }));

  await queryRunner.createForeignKey("categories", new TableForeignKey({
    columnNames: ["childrenId"],
    referencedColumnNames: ["id"],
    referencedTableName: "categories",
    onDelete: "CASCADE"
}));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories');
  }
}
