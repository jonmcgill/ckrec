import Head from 'next/head';
import GlobalStyles from '../components/GlobalStyles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/img/favicon32x32.png" />
        <title>Christ the King Anglican Church</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="format-detection" content="telephone=no" />
        <meta
          name="description"
          content="Preserving, teaching, and living the historic Christian faith in communion 
          with other branches of Christ’s Church to advance His Kingdom in all the earth."
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}