import MainHeader from '../components/MainHeader';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

