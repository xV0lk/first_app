import React from 'react';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from '../styles/GlobalStyle';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      <GlobalStyle />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
