import { Header } from '@/components/Header';
import { Landing } from '@/components/landing/Landing';
import workshops from '@/app/events.json';
import team from '@/app/team.json';
import reviews from '@/app/reviews.json';
import posts from '@/app/posts.json'
import { Footer } from '@/components/Footer';


export default function Home() {

  const workshopsPreview = workshops.map((workshop) => ({
    id: workshop.id,
    date: workshop.date,
    time: workshop.time,
    title: workshop.title,
    type: workshop.type
  }))
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Landing
          reviews={reviews}
          team={team}
          workshops={workshopsPreview}
          posts={posts}
        />
      </main>
      <Footer />
    </>
  );
}
