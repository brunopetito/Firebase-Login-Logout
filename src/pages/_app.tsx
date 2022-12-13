import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppProvider } from '../AppContext';
import ForcarAutorizacao from '../components/ForcarAutorizacao';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ForcarAutorizacao>
        <Component {...pageProps} />
      </ForcarAutorizacao>
    </AppProvider>
  );
}
