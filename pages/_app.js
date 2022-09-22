import Layout from '../src/components/layout';

function MyApp({ Component, pageProps }) {
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
