/*
  Warnings:

  - You are about to drop the `Course` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Duration` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Price` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SocialLinks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Dates" DROP CONSTRAINT "Dates_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Duration" DROP CONSTRAINT "Duration_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Price" DROP CONSTRAINT "Price_courseId_fkey";

-- DropForeignKey
ALTER TABLE "SocialLinks" DROP CONSTRAINT "SocialLinks_courseId_fkey";

-- DropTable
DROP TABLE "Course";

-- DropTable
DROP TABLE "Dates";

-- DropTable
DROP TABLE "Duration";

-- DropTable
DROP TABLE "Price";

-- DropTable
DROP TABLE "SocialLinks";

-- CreateTable
CREATE TABLE "course" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "colorLabel" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "rate" TEXT NOT NULL,
    "quantityCourses" TEXT NOT NULL,
    "quantityStudents" TEXT NOT NULL,
    "aboutAuthor" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "study" TEXT[],

    CONSTRAINT "course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dates" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "dates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "duration" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "duration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "price" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "socialLinks" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "socialLinks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "dates" ADD CONSTRAINT "dates_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "duration" ADD CONSTRAINT "duration_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "price" ADD CONSTRAINT "price_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socialLinks" ADD CONSTRAINT "socialLinks_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
