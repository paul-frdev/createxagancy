import prisma from '@/app/lib/prismadb';


export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({});

    return posts;
  } catch (error: any) {
    throw new Error(error);
  }
}
