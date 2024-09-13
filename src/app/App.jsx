import { CombinedProviders } from "@/app/lib/CombinedProviders";
import { Routing } from "@/routes/Routing";

export default function App() {
  return (
    <CombinedProviders>
      <Routing />
    </CombinedProviders>
  );
}
