/*
  Warnings:

  - The primary key for the `course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `dates` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `dates` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `duration` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `duration` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `event` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `faq` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `faq` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `labels` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `labels` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `price` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `price` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `reviews` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `reviews` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `socialLinks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `socialLinks` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `courseId` column on the `socialLinks` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `eventId` column on the `socialLinks` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `postId` column on the `socialLinks` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `tags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `tags` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `team` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `team` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `article` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `images` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `courseId` on the `dates` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `courseId` on the `duration` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `eventId` on the `faq` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `postId` on the `labels` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `courseId` on the `price` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `postId` on the `tags` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "article" DROP CONSTRAINT "article_postId_fkey";

-- DropForeignKey
ALTER TABLE "dates" DROP CONSTRAINT "dates_courseId_fkey";

-- DropForeignKey
ALTER TABLE "duration" DROP CONSTRAINT "duration_courseId_fkey";

-- DropForeignKey
ALTER TABLE "faq" DROP CONSTRAINT "faq_eventId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_courseId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_eventId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_postId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_reviewId_fkey";

-- DropForeignKey
ALTER TABLE "labels" DROP CONSTRAINT "labels_postId_fkey";

-- DropForeignKey
ALTER TABLE "price" DROP CONSTRAINT "price_courseId_fkey";

-- DropForeignKey
ALTER TABLE "socialLinks" DROP CONSTRAINT "socialLinks_courseId_fkey";

-- DropForeignKey
ALTER TABLE "socialLinks" DROP CONSTRAINT "socialLinks_eventId_fkey";

-- DropForeignKey
ALTER TABLE "socialLinks" DROP CONSTRAINT "socialLinks_postId_fkey";

-- DropForeignKey
ALTER TABLE "tags" DROP CONSTRAINT "tags_postId_fkey";

-- DropIndex
DROP INDEX "labels_postId_icon_text_key";

-- DropIndex
DROP INDEX "socialLinks_courseId_eventId_postId_key";

-- AlterTable
ALTER TABLE "course" DROP CONSTRAINT "course_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "course_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "dates" DROP CONSTRAINT "dates_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "courseId",
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD CONSTRAINT "dates_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "duration" DROP CONSTRAINT "duration_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "courseId",
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD CONSTRAINT "duration_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "event" DROP CONSTRAINT "event_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "event_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "faq" DROP CONSTRAINT "faq_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "eventId",
ADD COLUMN     "eventId" INTEGER NOT NULL,
ADD CONSTRAINT "faq_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "labels" DROP CONSTRAINT "labels_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "postId",
ADD COLUMN     "postId" INTEGER NOT NULL,
ADD CONSTRAINT "labels_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "post" DROP CONSTRAINT "post_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "post_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "price" DROP CONSTRAINT "price_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "courseId",
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD CONSTRAINT "price_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "reviews_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "socialLinks" DROP CONSTRAINT "socialLinks_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "courseId",
ADD COLUMN     "courseId" INTEGER,
DROP COLUMN "eventId",
ADD COLUMN     "eventId" INTEGER,
DROP COLUMN "postId",
ADD COLUMN     "postId" INTEGER,
ADD CONSTRAINT "socialLinks_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tags" DROP CONSTRAINT "tags_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "postId",
ADD COLUMN     "postId" INTEGER NOT NULL,
ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "team" DROP CONSTRAINT "team_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "team_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "article";

-- DropTable
DROP TABLE "images";

-- DropTable
DROP TABLE "user";

-- DropEnum
DROP TYPE "role";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT,
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "dates" ADD CONSTRAINT "dates_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "duration" ADD CONSTRAINT "duration_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "price" ADD CONSTRAINT "price_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socialLinks" ADD CONSTRAINT "socialLinks_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socialLinks" ADD CONSTRAINT "socialLinks_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "socialLinks" ADD CONSTRAINT "socialLinks_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "labels" ADD CONSTRAINT "labels_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "faq" ADD CONSTRAINT "faq_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tags" ADD CONSTRAINT "tags_postId_fkey" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
