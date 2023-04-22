/*
  Warnings:

  - Added the required column `repositoryId` to the `Metrics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tribuId` to the `Repository` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationId` to the `Tribu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Metrics" ADD COLUMN     "repositoryId" INT8 NOT NULL;

-- AlterTable
ALTER TABLE "Repository" ADD COLUMN     "tribuId" INT8 NOT NULL;

-- AlterTable
ALTER TABLE "Tribu" ADD COLUMN     "organizationId" INT8 NOT NULL;

-- AddForeignKey
ALTER TABLE "Tribu" ADD CONSTRAINT "Tribu_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repository" ADD CONSTRAINT "Repository_tribuId_fkey" FOREIGN KEY ("tribuId") REFERENCES "Tribu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Metrics" ADD CONSTRAINT "Metrics_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "Repository"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
