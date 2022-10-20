import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>React Shop</title>
          {/*<script dangerouslySetImerHTML={ __html: ''}  />*/}
          {/*    dentro de las comillas invertidas copiar la información dada en google analitic*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
