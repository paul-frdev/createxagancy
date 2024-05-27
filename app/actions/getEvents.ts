import prisma from '@/app/lib/prismadb';
import { IEventId } from '@/types/courses';
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

export async function getEventById(param: IEventId) {
  const { eventId } = param;

  try {
    const event = await prisma.event.findUnique({
      where: {
        id: +eventId,
      },
      include: {
        faq: true,
        socialLinks: true,
      },
    });

    if (!event) {
      return null;
    }

    delete event['createdAt'];
    delete event['updatedAt'];
    return {
      ...event,
    };
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function filterEvents(limit: string, filter: string, topic: string, query: string) {
  const count = parseInt(limit);

  console.log(filter, topic, limit, query, count);

  if (isNaN(count)) {
    throw new Error('Limit must be a number');
  }

  try {
    noStore();

    const whereConditions: any = {
      AND: [
        {
          type: {
            contains: query,
            mode: 'insensitive',
          },
        },
      ],
    };

    if (topic !== 'all') {
      whereConditions.AND.push({
        type: {
          contains: topic,
          mode: 'insensitive',
        },
      });
    } else {
      whereConditions.AND.push({
        date: {
          orderBy: {
            date: filter === 'newest' ? 'desc' : 'asc',
          },
        },
      });
    }

    const filterEvents = await prisma.event.findMany({
      where: whereConditions,
      take: count,
      orderBy: {
        date: filter === 'newest' ? 'desc' : 'asc',
      },
    });

    return filterEvents;
  } catch (error: any) {
    console.error('Error fetching filtered events:', error);
    throw new Error(error);
  }
}
