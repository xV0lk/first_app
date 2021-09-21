import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import GlobalStyle from '../components/GlobalStyle';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
