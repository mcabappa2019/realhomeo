import { useEffect } from 'react';
import Layout from '../src/components/layout';
import galite from 'ga-lite/dist/ga-lite';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    galite('create', 'G-E1T34GYH8Q', 'auto');
    galite('send', 'pageview');
  }, []);

  return (
    <>
      <div id="portal" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
