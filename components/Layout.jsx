import { NextSeo } from 'next-seo';
import React from 'react';

const Layout = ({ children }) => (
  <>
    <NextSeo
      title="Content"
      description="Content project es una página web donde mostramos nuestra compañía, servicios que ofrecemos y nuestros casos de éxito"
    />
    <main>{children}</main>
  </>
);

export default Layout;
