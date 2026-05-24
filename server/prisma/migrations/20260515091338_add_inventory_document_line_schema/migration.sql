/*
  Warnings:

  - The values [WRITEOFF] on the enum `Type` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[productId]` on the table `InventoryBalance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[warehouseId]` on the table `InventoryBalance` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Type_new" AS ENUM ('RECEIPT', 'SALE', 'TRANSFER', 'WRITE_OFF', 'INVENTORY_CHECK');
ALTER TABLE "public"."InventoryDocument" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "InventoryDocument" ALTER COLUMN "type" TYPE "Type_new" USING ("type"::text::"Type_new");
ALTER TYPE "Type" RENAME TO "Type_old";
ALTER TYPE "Type_new" RENAME TO "Type";
DROP TYPE "public"."Type_old";
ALTER TABLE "InventoryDocument" ALTER COLUMN "type" SET DEFAULT 'SALE';
COMMIT;

-- CreateTable
CREATE TABLE "InventoryDocumentLine" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "documentId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "warehouseId" TEXT NOT NULL,

    CONSTRAINT "InventoryDocumentLine_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InventoryBalance_productId_key" ON "InventoryBalance"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "InventoryBalance_warehouseId_key" ON "InventoryBalance"("warehouseId");

-- AddForeignKey
ALTER TABLE "InventoryDocumentLine" ADD CONSTRAINT "InventoryDocumentLine_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "InventoryDocument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryDocumentLine" ADD CONSTRAINT "InventoryDocumentLine_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryDocumentLine" ADD CONSTRAINT "InventoryDocumentLine_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
