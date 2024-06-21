'use server';

import prisma from '@/app/lib/prismadb';
import { IEventId } from '@/types/courses';
import { unstable_noStore as noStore } from 'next/cache';

export async function getEvents() {
  noStore();
  try {
    const events = await prisma.event.findMany();

    return events;
  } catch (error: any) {
    console.error('Error fetching events:', error);
    throw new Error(error.message || 'Error fetching events');
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

export async function filterEvents(limit: string, filter: string, topic: string, query: string, page: string) {
  const count = parseInt(limit);
  const pageNumber = parseInt(page);

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
    }

    const filterEvents = await prisma.event.findMany({
      where: whereConditions.AND.length >= 2 ? whereConditions : undefined,
      take: count,
      skip: (pageNumber - 1) * count,
      orderBy: {
        date: filter === 'newest' ? 'asc' : 'desc',
      },
    });

    return filterEvents;
  } catch (error: any) {
    console.error('Error fetching filtered events:', error);
    throw new Error(error);
  }
}

export async function fetchEventsPages(topic: string, query: string, filter: string) {
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
    }

    const countEvents = await prisma.event.count({
      where: whereConditions.AND.length >= 2 ? whereConditions : undefined,
      orderBy: {
        date: filter === 'newest' ? 'asc' : 'desc',
      },
    });

    const totalPages = Math.ceil(countEvents);

    return totalPages;
  } catch (error) {}
}
