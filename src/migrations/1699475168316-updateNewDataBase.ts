import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateNewDataBase1699475168316 implements MigrationInterface {
    name = 'UpdateNewDataBase1699475168316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_d64118a1cb2b2b54747d5851fe9"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "updateAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "REL_d64118a1cb2b2b54747d5851fe"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "addressesId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "UQ_c7a1c763ff260ac28674afa8c60" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_c7a1c763ff260ac28674afa8c60" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "FK_c7a1c763ff260ac28674afa8c60"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP CONSTRAINT "UQ_c7a1c763ff260ac28674afa8c60"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "addressesId" integer`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "REL_d64118a1cb2b2b54747d5851fe" UNIQUE ("addressesId")`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "updateAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "createAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD CONSTRAINT "FK_d64118a1cb2b2b54747d5851fe9" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
