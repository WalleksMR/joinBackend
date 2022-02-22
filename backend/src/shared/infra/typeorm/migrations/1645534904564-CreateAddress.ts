import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAddress1645534904564 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'address',
        columns: [
          { name: 'id', type: 'varchar', isPrimary: true },
          { name: 'client_id', type: 'varchar', isNullable: true },
          { name: 'street', type: 'varchar' },
          { name: 'number', type: 'varchar' },
          { name: 'complement', type: 'varchar' },
          { name: 'neighborhood', type: 'varchar' },
          { name: 'city', type: 'varchar' },
          { name: 'state', type: 'varchar' },
          { name: 'zip_code', type: 'varchar' },
          { name: 'latitude', type: 'varchar' },
          { name: 'longitude', type: 'varchar' },
          { name: 'created_at', type: 'timestamp', default: 'now()' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('address');
  }
}
