-- AlterTable
ALTER TABLE "SubTask" ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'pending',
ALTER COLUMN "dueDate" DROP NOT NULL;