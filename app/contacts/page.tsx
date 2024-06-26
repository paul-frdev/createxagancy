import { MapAddress } from '../ui/contacts/MapAddress';
import { MapProvider } from '@/providers/MapProvider';
import { Container } from '../ui/elements/Container';
import { ContactForm } from '../ui/forms/ContactForm';
import { Contacts } from '../ui/contacts/Contacts';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Contacts',
};

export default async function ContactsPage() {
  return (
    <section className=" w-full my-10">
      <Container className=" flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row justify-start lg:justify-between items-start  lg:items-center py-10">
        <Contacts />
        <MapProvider>
          <MapAddress />
        </MapProvider>
      </Container>
      <ContactForm />
    </section>
  );
}
