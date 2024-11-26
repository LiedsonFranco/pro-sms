/*
  Warnings:

  - You are about to drop the column `institutionId` on the `Client` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_ClientToInstitution" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ClientToInstitution_A_fkey" FOREIGN KEY ("A") REFERENCES "Client" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ClientToInstitution_B_fkey" FOREIGN KEY ("B") REFERENCES "Institution" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "gender" TEXT,
    "email" TEXT,
    "birthday" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Client" ("createdAt", "gender", "id", "name", "phoneNumber", "updatedAt") SELECT "createdAt", "gender", "id", "name", "phoneNumber", "updatedAt" FROM "Client";
DROP TABLE "Client";
ALTER TABLE "new_Client" RENAME TO "Client";
CREATE UNIQUE INDEX "Client_phoneNumber_key" ON "Client"("phoneNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToInstitution_AB_unique" ON "_ClientToInstitution"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToInstitution_B_index" ON "_ClientToInstitution"("B");
