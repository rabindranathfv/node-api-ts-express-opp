import { MigrationInterface, QueryRunner } from 'typeorm';

export class initialMig1680701693563 implements MigrationInterface {
  name = 'initialMig1680701693563';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`username\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`lastname\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`province\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`role\` enum ('USER', 'CUSTOMER', 'ADMIN') NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`customer\` (\`id\` varchar(36) NOT NULL, \`address\` varchar(255) NOT NULL, \`dni\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_id\` varchar(36) NULL, UNIQUE INDEX \`REL_5d1f609371a285123294fddcf3\` (\`user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`purchase\` (\`id\` int NOT NULL AUTO_INCREMENT, \`status\` varchar(255) NOT NULL, \`payment_method\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`customer_id\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`purchases_product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`quantity_product\` int NOT NULL, \`total_price\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`purchase_id\` int NULL, \`product_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`product_name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`category_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category_name\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`customer\` ADD CONSTRAINT \`FK_5d1f609371a285123294fddcf3a\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` ADD CONSTRAINT \`FK_2248a331258d17d204ccfe9497c\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchases_product\` ADD CONSTRAINT \`FK_aae681c8906333a1d4e215a292b\` FOREIGN KEY (\`purchase_id\`) REFERENCES \`purchase\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchases_product\` ADD CONSTRAINT \`FK_8a7ac9d55f04fb2695589a0c247\` FOREIGN KEY (\`product_id\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`product\` ADD CONSTRAINT \`FK_0dce9bc93c2d2c399982d04bef1\` FOREIGN KEY (\`category_id\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_0dce9bc93c2d2c399982d04bef1\``);
    await queryRunner.query(`ALTER TABLE \`purchases_product\` DROP FOREIGN KEY \`FK_8a7ac9d55f04fb2695589a0c247\``);
    await queryRunner.query(`ALTER TABLE \`purchases_product\` DROP FOREIGN KEY \`FK_aae681c8906333a1d4e215a292b\``);
    await queryRunner.query(`ALTER TABLE \`purchase\` DROP FOREIGN KEY \`FK_2248a331258d17d204ccfe9497c\``);
    await queryRunner.query(`ALTER TABLE \`customer\` DROP FOREIGN KEY \`FK_5d1f609371a285123294fddcf3a\``);
    await queryRunner.query(`DROP TABLE \`category\``);
    await queryRunner.query(`DROP TABLE \`product\``);
    await queryRunner.query(`DROP TABLE \`purchases_product\``);
    await queryRunner.query(`DROP TABLE \`purchase\``);
    await queryRunner.query(`DROP INDEX \`REL_5d1f609371a285123294fddcf3\` ON \`customer\``);
    await queryRunner.query(`DROP TABLE \`customer\``);
    await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
