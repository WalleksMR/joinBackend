import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateClients1645493852799 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clients',
        columns: [
          { name: 'id', type: 'varchar', isPrimary: true },
          { name: 'name', type: 'varchar' },
          { name: 'cnpj', type: 'varchar' },
          { name: 'corporate_name', type: 'varchar' },
          { name: 'contact', type: 'varchar' },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clients');
  }
}
