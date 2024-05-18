/*
  Warnings:

  - Added the required column `src` to the `team` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "team" ADD COLUMN     "src" TEXT NOT NULL;
