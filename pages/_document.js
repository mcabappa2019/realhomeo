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
          <meta charset="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <meta name="author" content="ThemeMarch" />
          {/* <title>
            Trustlife - Medical and Health Landing Page HTML Template
          </title> */}
          <link rel="icon" href="/assets/img/favicon.png" />
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
