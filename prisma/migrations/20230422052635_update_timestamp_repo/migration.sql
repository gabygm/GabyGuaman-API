/*
  Warnings:

  - The `create_time` column on the `Repository` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Repository" DROP COLUMN "create_time";
ALTER TABLE "Repository" ADD COLUMN     "create_time" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP;
