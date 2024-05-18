import { ICourseId } from '@/types/courses';
import prisma from '@/app/lib/prismadb';

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

    return {
      ...course,
      createAt: course.createdAt.toISOString(),
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
