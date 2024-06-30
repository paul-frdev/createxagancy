'use server';

import prisma from '@/app/lib/prismadb';
import { unstable_noStore as noStore } from 'next/cache';

type Posts = {
  number: number;
};
export async function getPosts({ number }: Posts) {
  noStore();
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
  noStore();
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

export async function filterPosts(limit: string, filter: string, query: string, page: string, type: string) {
  noStore();
  const count = parseInt(limit);
  const pageNumber = parseInt(page);

  if (isNaN(count)) {
    throw new Error('Limit must be a number');
  }

  try {
    const filterPosts = await prisma.post.findMany({
      where: {
        AND: [
          {
            type: {
              contains: filter === 'All' ? undefined : filter,
              mode: 'insensitive',
            },
          },
          {
            labels: {
              some: {
                text: {
                  contains: type === 'All' ? undefined : type,
                },
              },
            },
          },
          {
            author: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
      include: {
        labels: true,
      },
      take: count,
      skip: (pageNumber - 1) * count,
    });

    return filterPosts;
  } catch (error: any) {
    console.error('Error fetching filtered posts:', error);
    throw new Error(error);
  }
}

export async function fetchPostsPages(filter: string, query: string, type: string) {
  noStore();
  try {
    const count = await prisma.post.count({
      where: {
        AND: [
          {
            type: {
              contains: filter === 'All' ? undefined : filter,
              mode: 'insensitive',
            },
          },
          {
            labels: {
              some: {
                text: {
                  contains: type === 'All' ? undefined : type,
                },
              },
            },
          },
          {
            author: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },
    });

    const totalPages = Math.ceil(count);

    return totalPages;
  } catch (error) {}
}

export async function countPosts() {
  try {
    noStore();
    const countPosts = await prisma.post.findMany({
      select: {
        id: true,
        type: true,
      },
    });

    return countPosts;
  } catch (error) {}
}
