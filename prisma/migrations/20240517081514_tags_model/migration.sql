/*
  Warnings:

  - The `links` column on the `team` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "team" DROP COLUMN "links",
ADD COLUMN     "links" TEXT[];
