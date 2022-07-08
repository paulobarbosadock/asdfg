import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StoplightProject } from '@stoplight/elements-dev-portal';
import '@stoplight/elements-dev-portal/styles.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
