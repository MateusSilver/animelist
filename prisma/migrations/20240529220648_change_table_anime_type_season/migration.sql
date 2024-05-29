/*
  Warnings:

  - You are about to drop the column `seasons` on the `Anime` table. All the data in the column will be lost.
  - Added the required column `season` to the `Anime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Anime" DROP COLUMN "seasons",
ADD COLUMN     "season" INTEGER NOT NULL;
