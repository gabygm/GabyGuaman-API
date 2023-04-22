-- CreateTable
CREATE TABLE "Organization" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING(50) NOT NULL,
    "status" INT4 NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tribu" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING(50) NOT NULL,
    "status" INT4 NOT NULL,

    CONSTRAINT "Tribu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Repository" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "name" STRING(50) NOT NULL,
    "state" STRING(1) NOT NULL,
    "create_time" TIMESTAMP NOT NULL,
    "status" STRING(1) NOT NULL,

    CONSTRAINT "Repository_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Metrics" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "coverage" FLOAT8 NOT NULL,
    "bugs" INT4 NOT NULL,
    "vulnerabilities" TIMESTAMP NOT NULL,
    "hotspot" INT4 NOT NULL,
    "code_smells" INT4 NOT NULL,

    CONSTRAINT "Metrics_pkey" PRIMARY KEY ("id")
);
