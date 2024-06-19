'use server';

import prisma from '@/app/lib/prismadb';

export async function getTeam() {
  try {
    const team = await prisma.team.findMany();

    return team;
  } catch (error: any) {
    throw new Error(error);
  }
}
