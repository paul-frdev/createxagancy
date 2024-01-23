import { Header } from '@/components/Header';
import { Landing } from '@/components/landing/Landing';
import { Container } from '@/components/ui/Container';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[1.563em] relative">
      <Container>
        <Header />
        <Landing />
      </Container>
    </main>
  );
}
