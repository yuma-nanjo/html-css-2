import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>YAMACAFE ヤマカフェ</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
