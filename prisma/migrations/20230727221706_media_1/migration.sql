-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT NOT NULL DEFAULT 'avatars/default.jpg',
    "isStuff" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "description" TEXT,
    "author_code" TEXT
);
INSERT INTO "new_User" ("author_code", "avatar", "createdAt", "description", "email", "id", "isStuff", "password", "updatedAt", "username") SELECT "author_code", "avatar", "createdAt", "description", "email", "id", "isStuff", "password", "updatedAt", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_Comics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cover" TEXT NOT NULL DEFAULT 'covers/default.jpg',
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Comics_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comics" ("authorId", "cover", "createdAt", "description", "id", "title", "updatedAt") SELECT "authorId", "cover", "createdAt", "description", "id", "title", "updatedAt" FROM "Comics";
DROP TABLE "Comics";
ALTER TABLE "new_Comics" RENAME TO "Comics";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
