<a><img src="https://img.shields.io/badge/Node-v18.16.0-blue"></a>
<a><img src="https://img.shields.io/badge/Nestjs-9.0.0-red"></a>
<a><img src="https://img.shields.io/badge/Prisma-ORM-brightgreen"></a>
<a><img src="https://img.shields.io/badge/Jest-testing-yellow"></a>
<a><img src="https://img.shields.io/badge/cockroachdb-DATABASE-blue"></a>


## Description

Project to manage organization , tribes and repositories data.


## Setup
To run locally clone the repository.

```bash
$ npm install
```

Add secrets, copy the `example.env` file and rename it to `.env` and then fill in the secrets
```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=verify-full?schema=public"
```

Make sure you include USER, PASSWORD, PORT, DATABASE

### Apply migrations
```bash
npx prisma migrate dev
```

### Populate DB with seeds
```bash
npx prisma db seed
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
### Endpoints
### Repositories
```http
GET /repository
```
Organanization

```http
GET /organization                   Get all organizations
```

```http
POST /organization                  Create organization
```

```http
PATCH /organization/:id             Update organization
```

```http
DELETE /organization/:id            Delete organization
```
Metricas

```http
GET /repository/metrics/:idtribu    Get metrics
```
Download csv
```http
GET /repository/report/:idtribu 
```
