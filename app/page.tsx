import { Header } from '@/components/Header';
import { Landing } from '@/components/landing/Landing';
import workshops from '@/app/events.json'


export default function Home() {

  const workshopsPreview = workshops.map((workshop) => ({
    id: workshop.id,
    date: workshop.date,
    time: workshop.time,
    title: workshop.title,
    type: workshop.type
  }))
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[1.563em] relative">
      <Header />
      <Landing workshops={workshopsPreview} />
    </main>
  );
}
