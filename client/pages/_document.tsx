import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Gideon+Roman&display=swap" rel="stylesheet" />
        </Head>
        <body style={{ backgroundColor: '#EFE5D5'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
};

export default MyDocument;
