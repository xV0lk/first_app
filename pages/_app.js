import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo, NextSeo } from 'next-seo';
import SEO from '../next-seo.config';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextSeo
        title="Content"
        description="Content project es una página web donde mostramos nuestra compañía, servicios que ofrecemos y nuestros casos de éxito"
      />
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
