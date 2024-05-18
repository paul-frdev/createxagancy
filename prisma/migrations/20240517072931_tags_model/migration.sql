-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "time" TEXT[],
    "date" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "aboutAuthor" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);
