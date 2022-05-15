import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { applyInterceptors } from '../services/interceptors';
import { APIClient } from '../services';

function MyApp({ Component, pageProps }: AppProps) {
  applyInterceptors();
  APIClient.buildServices();
  return <Component {...pageProps} />
}

export default MyApp
