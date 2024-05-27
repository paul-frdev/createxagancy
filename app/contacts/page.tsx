import { MapAddress } from '../ui/contacts/MapAddress';
import { MapProvider } from '@/providers/MapProvider';

export default async function ContactsPage() {
  return (
    <MapProvider>
      <MapAddress />
    </MapProvider>
  );
}
