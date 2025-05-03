import header from '../components/header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

