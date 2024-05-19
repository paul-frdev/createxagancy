import prisma from '@/app/lib/prismadb';

type Posts = {
  number: number;
};
export async function getPosts({ number }: Posts) {
  try {
    const posts = await prisma.post.findMany({
      take: number,
    });

    return posts;
  } catch (error: any) {
    throw new Error(error);
  }
}
