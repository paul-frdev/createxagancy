import prisma from '@/app/lib/prismadb';
import { unstable_noStore as noStore } from 'next/cache';

export async function getEvents() {
  noStore();
  try {
    const events = await prisma.event.findMany({});

    return events;
  } catch (error: any) {
    throw new Error(error);
  }
}
