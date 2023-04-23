-- CreateTable
CREATE TABLE "Test" (
    "id" STRING NOT NULL,
    "coverage" FLOAT8 NOT NULL,
    "bugs" INT4 NOT NULL,
    "vulnerabilities" TIMESTAMP NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
