import { CombinedProviders } from '@/app/lib';
import { Notification } from '@/components';
import { Routing } from '@/routes/Routing';
import { Bounce, ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <CombinedProviders>
      <Notification />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <ToastContainer />

      <Routing />
    </CombinedProviders>
  );
}
