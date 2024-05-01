-- CreateTable
CREATE TABLE "Student" (
    "id" INT4 NOT NULL,
    "name" STRING NOT NULL,
    "tshirtSize" STRING NOT NULL DEFAULT 'L',
    "note" STRING NOT NULL DEFAULT '',

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nickname" (
    "name" STRING NOT NULL,
    "sender" INT4 NOT NULL,
    "receiver" INT4 NOT NULL,

    CONSTRAINT "Nickname_pkey" PRIMARY KEY ("name","receiver")
);

-- CreateTable
CREATE TABLE "Vote" (
    "name" STRING NOT NULL,
    "voter" INT4 NOT NULL,
    "receiver" INT4 NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("voter","receiver")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" STRING NOT NULL,
    "text" STRING NOT NULL,
    "sender" INT4 NOT NULL,
    "receiver" INT4 NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nerd" (
    "id" INT4 NOT NULL,

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
