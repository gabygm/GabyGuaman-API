import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function organization() {
    return await prisma.organization.upsert(
     {
         where: { id: 1 },
         update: {},
         create: {
           id:1, 
           name: 'Banco Pichincha',
           status: 1,
         },
       }
   )
}

async function tribu() {
    return await prisma.tribu.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            name: 'Centro Digital',
            status: 1,
            organizationId: 1
            },
          },
      )
}

async function repos() {
    const repo1 = await prisma.repository.upsert({
        where: { id: 1 },
        update: {
          name: "cd-common-testing"
        },
        create: {
            id: 1,
            name: 'cd-common-testing',
            state: "V",
            status: 'A',
            tribuId: 1,
            create_time: '2023-03-15T16:29:56.000Z'
            },
          },
      )
    
      const repo2 = await prisma.repository.upsert({
        where: { id: 2 },
        update: {
          state: "D",
        },
        create: {
            id: 2 ,
            name: 'cd-common-utils',
            state: "D",
            status: 'A',
            tribuId: 1,
            create_time: '2023-03-15T16:29:56.000Z'
            },
          },
      )
    
      const repo3 = await prisma.repository.upsert({
        where: { id: 3 },
        update: {
          state: "E",
          name: "cd-common-tech"
        },
        create: {
            id: 3,
            name: 'cd-common-tech',
            state: "E",
            status: 'A',
            tribuId: 1,
            create_time: '2023-03-15T16:29:56.000Z'
            },
          },
      )
      
    return {repo1, repo2, repo3}
}

async function metrics() {
  const metric = await prisma.metrics.upsert({
    where: { id: 1 },
    update: {},
    create: {
        id: 1,
        coverage: 70,
        bugs: 10,
        vulnerabilities: 7,
        hotspot: 1,
        code_smells: 9,
        repositoryId: 3
        },
      },
  ) 
  const metric2 = await prisma.metrics.upsert({
    where: { id: 2 },
    update: {},
    create: {
        id: 2,
        coverage: 90,
        bugs: 10,
        vulnerabilities: 7,
        hotspot: 1,
        code_smells: 9,
        repositoryId: 3
        },
      },
  )  
  return {metric, metric2}

}

async function main() {
    await organization()
    await tribu()
    await repos()
    await metrics()
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })