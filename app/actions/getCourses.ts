'use server';

import prisma from '@/app/lib/prismadb';
import { unstable_noStore as noStore } from 'next/cache';

export async function getCourses(query: string) {
  try {
    noStore();
    const courses = await prisma.course.findMany({
      include: {
        price: true,
      },
      where: {
        OR: [
          {
            label: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            text: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
      take: 9,
    });

    return courses;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getAllCourses(limit: string, filter: string, query: string) {
  let count: any = parseInt(limit as any);
  // console.log('Fetching revenue data...');
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    noStore();

    const findCourses = await prisma.course.findMany({
      include: {
        price: true,
      },
      where: {
        AND: [
          {
            label: {
              contains: filter === 'All' ? undefined : filter,
              mode: 'insensitive',
            },
          },
          {
            label: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
      take: filter !== 'All' ? count : undefined,
    });

    return findCourses;
  } catch (error) {}
}

export async function countCourses() {
  // console.log('Fetching revenue data...');
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    noStore();
    const countCourses = await prisma.course.findMany({
      select: {
        id: true,
        label: true,
      },
    });

    return countCourses;
  } catch (error) {}
}
