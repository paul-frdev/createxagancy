/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "src" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
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
    "dateId" INTEGER NOT NULL,
    "durationId" INTEGER NOT NULL,
    "priceId" INTEGER NOT NULL,
    "socialLinkId" INTEGER NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("dateId","durationId","priceId","socialLinkId")
);

-- CreateTable
CREATE TABLE "Dates" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Dates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Duration" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Duration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Price" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialLinks" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "SocialLinks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dates_text_key" ON "Dates"("text");

-- CreateIndex
CREATE UNIQUE INDEX "Duration_text_key" ON "Duration"("text");

-- CreateIndex
CREATE UNIQUE INDEX "Price_text_key" ON "Price"("text");

-- CreateIndex
CREATE UNIQUE INDEX "SocialLinks_text_key" ON "SocialLinks"("text");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_dateId_fkey" FOREIGN KEY ("dateId") REFERENCES "Dates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_durationId_fkey" FOREIGN KEY ("durationId") REFERENCES "Duration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_socialLinkId_fkey" FOREIGN KEY ("socialLinkId") REFERENCES "SocialLinks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
