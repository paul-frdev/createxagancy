'use server';

import prisma from '@/app/lib/prismadb';

export async function getReviews() {
  try {
    const reviews = await prisma.reviews.findMany();

    return reviews;
  } catch (error: any) {
    throw new Error(error);
  }
}
