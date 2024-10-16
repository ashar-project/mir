import { CombinedProviders } from '@/app/lib';
import { Notification } from '@/components';
import { Routing } from '@/routes/Routing';

export default function App() {
  return (
    <CombinedProviders>
      <Notification />

      <Routing />
    </CombinedProviders>
  );
}
