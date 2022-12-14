import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { req, query, res, asPath, pathname } = ctx;

    return { ...initialProps, asPath: asPath };
  }

  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <meta name="author" content="ThemeMarch" />
          {/* <title>
            Trustlife - Medical and Health Landing Page HTML Template
          </title> */}
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/assets/icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/assets/icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/assets/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/assets/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/assets/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/assets/icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/assets/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/assets/icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/assets/icons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/assets/icons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/assets/icons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="stylesheet preload prefetch"
            as="style"
            type="text/css"
            href="/assets/css/plugins.css"
          />
          <link
            rel="stylesheet preload prefetch"
            as="style"
            type="text/css"
            href="/assets/css/style.css"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
            integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
            crossOrigin="anonymous"
            async
          ></script>
        </Head>

        <body>
          <b className="screen-overlay"></b>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
