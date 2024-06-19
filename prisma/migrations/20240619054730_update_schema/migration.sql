/*
  Warnings:

  - A unique constraint covering the columns `[postId,icon,text]` on the table `labels` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[courseId,eventId,postId]` on the table `socialLinks` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "dates_courseId_key";

-- DropIndex
DROP INDEX "duration_courseId_key";

-- DropIndex
DROP INDEX "faq_eventId_key";

-- DropIndex
DROP INDEX "labels_postId_key";

-- DropIndex
DROP INDEX "price_courseId_key";

-- DropIndex
DROP INDEX "socialLinks_courseId_key";

-- DropIndex
DROP INDEX "socialLinks_eventId_key";

-- DropIndex
DROP INDEX "socialLinks_postId_key";

-- DropIndex
DROP INDEX "tags_postId_key";

-- AlterTable
ALTER TABLE "images" ALTER COLUMN "postId" DROP NOT NULL,
ALTER COLUMN "courseId" DROP NOT NULL,
ALTER COLUMN "eventId" DROP NOT NULL,
ALTER COLUMN "reviewId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "labels_postId_icon_text_key" ON "labels"("postId", "icon", "text");

-- CreateIndex
CREATE UNIQUE INDEX "socialLinks_courseId_eventId_postId_key" ON "socialLinks"("courseId", "eventId", "postId");
