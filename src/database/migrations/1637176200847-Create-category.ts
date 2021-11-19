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
          }
        ],
        foreignKeys: [
          {
            name: 'FKparentId',
            referencedTableName: 'categories',
            referencedColumnNames: ['id'],
            columnNames: ['parentId'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          }
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories');
  }
}
