import StoreHeader from '../components/header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StoreHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

