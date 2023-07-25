/*
  Warnings:

  - Added the required column `authorId` to the `Comics` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cover" TEXT NOT NULL DEFAULT 'public/covers/default.jpg',
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Comics_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comics" ("cover", "createdAt", "description", "id", "title", "updatedAt") SELECT "cover", "createdAt", "description", "id", "title", "updatedAt" FROM "Comics";
DROP TABLE "Comics";
ALTER TABLE "new_Comics" RENAME TO "Comics";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
