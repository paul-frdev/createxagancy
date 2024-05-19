import { MapProvider } from '@/providers/MapProvider';
import { MapAddress } from '../ui/contacts/MapAddress';

export default async function ContactsPage() {
  return (
    <MapProvider>
      <MapAddress />
    </MapProvider>
  );
}
