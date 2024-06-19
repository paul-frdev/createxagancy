'use server';

import prisma from '@/app/lib/prismadb';

type Posts = {
  number: number;
};
export async function getPosts({ number }: Posts) {
  try {
    const posts = await prisma.post.findMany({
      where: {},
      take: number,
      include: {
        labels: true,
      },
    });

    return posts;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getPostById(param: { articleId: string }) {
  const { articleId } = param;

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: +articleId,
      },
      include: {
        tags: true,
        labels: true,
        socialLinks: true,
      },
    });

    if (!post) {
      return null;
    }

    const { createdAt, updatedAt, ...safePost } = post;

    return safePost;
  } catch (error: any) {
    throw new Error(error);
  }
}
