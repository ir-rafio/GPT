/*
  Warnings:

  - You are about to drop the column `oauthToken` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "oauthToken",
ALTER COLUMN "tshirtSize" SET DEFAULT 'L',
ALTER COLUMN "note" SET DEFAULT '';
