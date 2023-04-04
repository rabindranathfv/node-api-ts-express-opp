import { MigrationInterface, QueryRunner } from 'typeorm';

export class addRoleUser1680133104481 implements MigrationInterface {
  name = 'addRoleUser1680133104481';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` ADD \`role\` enum ('USER', 'CUSTOMER', 'ADMIN') NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE \`customer\` ADD CONSTRAINT \`FK_5d1f609371a285123294fddcf3a\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` ADD CONSTRAINT \`FK_2248a331258d17d204ccfe9497c\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`purchase\` DROP FOREIGN KEY \`FK_2248a331258d17d204ccfe9497c\``);
    await queryRunner.query(`ALTER TABLE \`customer\` DROP FOREIGN KEY \`FK_5d1f609371a285123294fddcf3a\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`role\``);
  }
}
