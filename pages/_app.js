import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import SEO from '../next-seo.config';
import GlobalStyle from '../styles/GlobalStyle';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps, router }) {
  const nRouter = useRouter();
  const pageTitle = nRouter.pathname;
  const titleArr = pageTitle.split('/');
  const title = titleArr[1].charAt().toUpperCase() + titleArr[1].slice(1);
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextSeo
        title={title || undefined}
        titleTemplate="Capture | %s"
        description="Capture project es una página web donde mostramos nuestra compañía, servicios que ofrecemos y nuestros casos de éxito"
      />
      <GlobalStyle />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
