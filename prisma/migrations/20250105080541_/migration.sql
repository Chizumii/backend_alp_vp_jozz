/*
  Warnings:

  - A unique constraint covering the columns `[Token]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Token` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "Token" VARCHAR(100) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_Token_key" ON "User"("Token");