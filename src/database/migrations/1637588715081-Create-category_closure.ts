import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategoryClosure1637588715081 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'category_closure',
        columns: [
          {
            name: 'ancestor_id',
            type: 'int',
            isNullable: true,
            isUnique: true,
          },
          {
            name: 'descendant_id',
            type: 'int',
            isNullable: true,
            isUnique: true,
          }
        ],
        foreignKeys: [
          {
            name: 'FKancestorId',
            referencedTableName: 'category',
            referencedColumnNames: ['id'],
            columnNames: ['ancestor_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          }
        ],
        uniques: [
          {
            name: 'FKdescendantId',
            columnNames: ['descendant_id'],
          }
        ]
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('category_closure');
  }
}
