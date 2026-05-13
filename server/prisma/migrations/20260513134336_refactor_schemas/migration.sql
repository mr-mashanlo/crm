/*
  Warnings:

  - The `type` column on the `InventoryDocument` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `status` column on the `InventoryDocument` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `name` on the `Warehouse` table. All the data in the column will be lost.
  - Added the required column `address` to the `Warehouse` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'MODERATOR');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('RECEIPT', 'SALE', 'TRANSFER', 'WRITEOFF', 'INVENTORY_CHECK');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'COMPLETED', 'CANCELLED');

-- AlterTable
ALTER TABLE "InventoryDocument" DROP COLUMN "type",
ADD COLUMN     "type" "Type" NOT NULL DEFAULT 'SALE',
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "Price" ALTER COLUMN "validFrom" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- AlterTable
ALTER TABLE "Warehouse" DROP COLUMN "name",
ADD COLUMN     "address" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "InventoryBalance" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    "warehouseId" TEXT NOT NULL,

    CONSTRAINT "InventoryBalance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InventoryBalance" ADD CONSTRAINT "InventoryBalance_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryBalance" ADD CONSTRAINT "InventoryBalance_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
