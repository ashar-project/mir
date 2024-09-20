import { CombinedProviders } from '@/app/lib';
import { Routing } from '@/routes/Routing';

export default function App() {
  return (
    <CombinedProviders>
      <Routing />
    </CombinedProviders>
  );
}
