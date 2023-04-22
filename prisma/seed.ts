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
        update: {},
        create: {
            id: 1,
            name: 'cd-common-utils',
            state: "V",
            status: 'A',
            tribuId: 1,
            create_time: '2023-03-15T16:29:56.000Z'
            },
          },
      )
    
      const repo2 = await prisma.repository.upsert({
        where: { id: 2 },
        update: {},
        create: {
            id: 2 ,
            name: 'cd-common-utils',
            state: "W",
            status: 'A',
            tribuId: 1,
            create_time: '2023-03-15T16:29:56.000Z'
            },
          },
      )
    
      const repo3 = await prisma.repository.upsert({
        where: { id: 3 },
        update: {},
        create: {
            id: 3,
            name: 'cd-common-utils',
            state: "A",
            status: 'A',
            tribuId: 1,
            create_time: '2023-03-15T16:29:56.000Z'
            },
          },
      )  
    return {repo1, repo2, repo3}
}

async function main() {
    await organization()
    await tribu()
    await repos()
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