import prisma from '@/app/lib/prismadb';

export async function getTeam() {
  try {
    const events = await prisma.team.findMany({});

    return events;
  } catch (error: any) {
    throw new Error(error);
  }
}
