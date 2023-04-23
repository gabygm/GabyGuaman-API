<a><img src="https://img.shields.io/badge/Node-v18.16.0-blue"></a>
<a><img src="https://img.shields.io/badge/Nestjs-9.0.0-red"></a>
<a><img src="https://img.shields.io/badge/Prisma-ORM-brightgreen"></a>
<a><img src="https://img.shields.io/badge/Jest-testing-yellow"></a>


[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Description

Project to manage organization , tribes and repositories data.

## Installation

```bash
$ npm install
```
## Setup
To run locally clone the repository.

Add secrets, copy the `example.env` file and rename it to `.env` and then fill in the secrets

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=verify-full?schema=public"
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
GET /organization   get all organizations
```

```http
POST /organization   create organization
```

```http
PATCH /organization/:id   update organization
```

```http
DELETE /organization/:id   delete organization
```
Metricas

```http
GET /repository/metrics/:idtribu  get metrics
```
download csv
```http
GET /repository/report/:idtribu 
```
