import prisma from '@/app/lib/prismadb';

export async function getCourses() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        price: true,
      },
    });

    return courses;
  } catch (error: any) {
    throw new Error(error);
  }
}
