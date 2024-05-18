/*
  Warnings:

  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dateId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `durationId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `priceId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `socialLinkId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Dates` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Duration` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `Price` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `SocialLinks` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[value]` on the table `Dates` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[value]` on the table `Duration` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[value]` on the table `Price` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[url]` on the table `SocialLinks` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `courseId` to the `Dates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Dates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `Duration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Duration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `Price` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Price` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `SocialLinks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `SocialLinks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_dateId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_durationId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_priceId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_socialLinkId_fkey";

-- DropIndex
DROP INDEX "Dates_text_key";

-- DropIndex
DROP INDEX "Duration_text_key";

-- DropIndex
DROP INDEX "Price_text_key";

-- DropIndex
DROP INDEX "SocialLinks_text_key";

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
DROP COLUMN "dateId",
DROP COLUMN "durationId",
DROP COLUMN "priceId",
DROP COLUMN "socialLinkId",
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Dates" DROP COLUMN "text",
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Duration" DROP COLUMN "text",
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Price" DROP COLUMN "text",
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SocialLinks" DROP COLUMN "text",
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Dates_value_key" ON "Dates"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Duration_value_key" ON "Duration"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Price_value_key" ON "Price"("value");

-- CreateIndex
CREATE UNIQUE INDEX "SocialLinks_url_key" ON "SocialLinks"("url");

-- AddForeignKey
ALTER TABLE "Dates" ADD CONSTRAINT "Dates_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Duration" ADD CONSTRAINT "Duration_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialLinks" ADD CONSTRAINT "SocialLinks_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
