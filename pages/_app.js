import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import GlobalStyle from '../styles/GlobalStyle';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Layout>
        <Navbar />
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
