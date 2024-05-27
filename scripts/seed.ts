import prisma from '../app/lib/prismadb';
import coursesData from './courses.json';
import eventData from './events.json';
import postData from './posts.json';
import reviewData from './reviews.json';
import teamData from './team.json';

async function main() {
  const courses = await prisma.$transaction(
    coursesData.map((course) =>
      prisma.course.upsert({
        where: {
          id: course.id,
        },
        update: {},
        create: {
          src: course.src,
          alt: course.alt,
          label: course.label,
          colorLabel: course.colorLabel,
          text: course.text,
          author: course.author,
          position: course.position,
          rate: course.rate,
          quantityCourses: course.quantityCourses,
          quantityStudents: course.quantityStudents,
          aboutAuthor: course.aboutAuthor,
          description: course.description,
          study: course.study,
          dates: {
            create: course.dates.map((date) => ({
              value: date.value,
            })),
          },
          durations: {
            create: course.duration.map((duration) => ({
              value: duration.value,
            })),
          },
          price: {
            create: course.price.map((price) => ({
              value: price.value,
            })),
          },
          socialLinks: {
            create: course.socialLinks.map((link) => ({
              url: link,
            })),
          },
        },
      })
    )
  );

  const events = await prisma.$transaction(
    eventData.map((event) =>
      prisma.event.upsert({
        where: {
          id: event.id,
        },
        update: {},
        create: {
          time: event.time,
          date: event.date,
          title: event.title,
          type: event.type,
          price: event.price,
          author: event.author,
          position: event.position,
          description: event.description,
          aboutAuthor: event.aboutAuthor,
          photo: event.photo,
          socialLinks: {
            create: event.socialLinks.map((link) => ({
              url: link,
            })),
          },
          faq: {
            create: event.faq.map((question) => ({
              title: question.title,
              text: question.text,
            })),
          },
        },
      })
    )
  );

  const team = await prisma.$transaction(
    teamData.map((team) =>
      prisma.team.upsert({
        where: {
          id: team.id,
        },
        update: {},
        create: {
          src: team.src,
          author: team.author,
          position: team.position,
          links: team.links,
        },
      })
    )
  );

  const posts = await prisma.$transaction(
    postData.map((post) =>
      prisma.post.upsert({
        where: {
          id: post.id,
        },
        update: {},
        create: {
          icon: post.icon,
          type: post.type,
          image: post.image,
          title: post.title,
          text: post.text,
          read: post.read,
          author: post.author,
          date: post.date,
          labels: {
            create: post.labels.map((label) => ({
              icon: label.icon,
              text: label.text,
              src: label.src,
              date: label.date,
            })),
          },
          socialLinks: {
            create: post.socialLinks.map((link) => ({
              url: link,
            })),
          },
          tags: {
            create: post.tags?.map((word) => ({
              text: word,
            })),
          },
        },
      })
    )
  );

  const reviews = await prisma.$transaction(
    reviewData.map((review) =>
      prisma.reviews.upsert({
        where: {
          id: review.id,
        },
        update: {},
        create: {
          text: review.text,
          src: review.src,
          author: review.author,
          course: review.course,
        },
      })
    )
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
