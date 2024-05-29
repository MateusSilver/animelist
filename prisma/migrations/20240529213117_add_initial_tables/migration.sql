-- CreateTable
CREATE TABLE "Anime" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "seasons" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "studio" TEXT NOT NULL,
    "sinopsis" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "coverURL" TEXT NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    "coment" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "markbook" BOOLEAN NOT NULL,
    "animeID" TEXT NOT NULL,
    "userID" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_animeID_fkey" FOREIGN KEY ("animeID") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
