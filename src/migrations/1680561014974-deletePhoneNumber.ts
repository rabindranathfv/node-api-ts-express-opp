import { MigrationInterface, QueryRunner } from 'typeorm';

export class deletePhoneNumber1680561014974 implements MigrationInterface {
  name = 'deletePhoneNumber1680561014974';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`number_phone\``);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` ADD \`number_phone\` int NOT NULL`);
  }
}
