import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.habit.deleteMany()
  await prisma.habit.create({
    

prisma.day.create({
  date: {
    /**Wednesday*/
    date: new Date ("2023-01-04T03:00:00:000z"),
    habits: {
      { habit_id: firstHabitId}
      { habit_id: secondHabitId}
    }
  }
})



    
  })
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