/*
  Warnings:

  - You are about to drop the column `note` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `tshirtSize` on the `Student` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_receiver_fkey";

-- DropForeignKey
ALTER TABLE "Nerd" DROP CONSTRAINT "Nerd_id_fkey";

-- DropForeignKey
ALTER TABLE "Nickname" DROP CONSTRAINT "Nickname_receiver_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_voter_fkey";

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "studentDataId" INTEGER;

-- AlterTable
ALTER TABLE "Nerd" ADD COLUMN     "studentDataId" INTEGER;

-- AlterTable
ALTER TABLE "Nickname" ADD COLUMN     "studentDataId" INTEGER;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "note",
DROP COLUMN "tshirtSize";

-- AlterTable
ALTER TABLE "StudentData" ADD COLUMN     "note" TEXT,
ADD COLUMN     "tshirtSize" TEXT;

-- AlterTable
ALTER TABLE "Vote" ADD COLUMN     "studentDataId" INTEGER;

-- AddForeignKey
ALTER TABLE "Nickname" ADD CONSTRAINT "Nickname_studentDataId_fkey" FOREIGN KEY ("studentDataId") REFERENCES "StudentData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_studentDataId_fkey" FOREIGN KEY ("studentDataId") REFERENCES "StudentData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_studentDataId_fkey" FOREIGN KEY ("studentDataId") REFERENCES "StudentData"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nerd" ADD CONSTRAINT "Nerd_studentDataId_fkey" FOREIGN KEY ("studentDataId") REFERENCES "StudentData"("id") ON DELETE SET NULL ON UPDATE CASCADE;
