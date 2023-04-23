/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `vulnerabilities` on the `Metrics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Metrics" DROP COLUMN "vulnerabilities";
ALTER TABLE "Metrics" ADD COLUMN     "vulnerabilities" INT4 NOT NULL;

-- DropTable
DROP TABLE "Test";
