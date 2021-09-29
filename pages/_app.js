import React from "react";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import GlobalStyle from "../styles/GlobalStyle";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
