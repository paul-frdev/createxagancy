'use server';

import prisma from '@/app/lib/prismadb';
import { ICourseId } from '@/types/courses';

export async function getCourseById(param: ICourseId) {
  const { courseId } = param;

  try {
    const course = await prisma.course.findUnique({
      where: {
        id: +courseId,
      },
      include: {
        dates: true,
        durations: true,
        price: true,
        socialLinks: true,
      },
    });

    if (!course) {
      return null;
    }

    delete course['createdAt'];
    delete course['updatedAt'];

    return course;
  } catch (error: any) {
    throw new Error(error);
  }
}
