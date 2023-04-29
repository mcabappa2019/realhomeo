import { useEffect } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Layout from '../src/components/layout';
import galite from 'ga-lite/dist/ga-lite';

// apollo client
// const client = new ApolloClient({
//   uri: 'http://localhost:1337/graphql',
//   cache: new InMemoryCache(),
// });

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
