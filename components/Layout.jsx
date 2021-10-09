import { NextSeo } from 'next-seo';
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <>
    <NextSeo
      title="Content"
      description="Content project es una página web donde mostramos nuestra compañía, servicios que ofrecemos y nuestros casos de éxito"
    />
    <Navbar />
    <main>{children}</main>
  </>
);

export default Layout;
