import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreateClientsAddress1645559565760 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'address',
      new TableForeignKey({
        name: 'FKAddressClients',
        referencedTableName: 'clients',
        referencedColumnNames: ['id'],
        columnNames: ['client_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('address', 'FKAddressClients');
  }
}
