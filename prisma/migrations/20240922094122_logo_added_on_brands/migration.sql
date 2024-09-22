/*
  Warnings:

  - Added the required column `logo` to the `Brand` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Brand" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL
);
INSERT INTO "new_Brand" ("id", "name") SELECT "id", "name" FROM "Brand";
DROP TABLE "Brand";
ALTER TABLE "new_Brand" RENAME TO "Brand";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
