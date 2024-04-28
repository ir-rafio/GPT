-- CreateTable
CREATE TABLE "StudentData" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentData_id_key" ON "StudentData"("id");
