-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "tshirtSize" TEXT NOT NULL DEFAULT 'L',
    "note" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nickname" (
    "name" TEXT NOT NULL,
    "sender" INTEGER NOT NULL,
    "receiver" INTEGER NOT NULL,

    CONSTRAINT "Nickname_pkey" PRIMARY KEY ("name","receiver")
);

-- CreateTable
CREATE TABLE "Vote" (
    "name" TEXT NOT NULL,
    "voter" INTEGER NOT NULL,
    "receiver" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("voter","receiver")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "sender" INTEGER NOT NULL,
    "receiver" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nerd" (
    "id" INTEGER NOT NULL,

    CONSTRAINT "Nerd_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Nickname" ADD CONSTRAINT "Nickname_receiver_fkey" FOREIGN KEY ("receiver") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_name_receiver_fkey" FOREIGN KEY ("name", "receiver") REFERENCES "Nickname"("name", "receiver") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vote" ADD CONSTRAINT "Vote_voter_fkey" FOREIGN KEY ("voter") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_receiver_fkey" FOREIGN KEY ("receiver") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nerd" ADD CONSTRAINT "Nerd_id_fkey" FOREIGN KEY ("id") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
