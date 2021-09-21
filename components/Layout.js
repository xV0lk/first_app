import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const router = useRouter();
  const pageTitle = router.pathname;
  const titleArr = pageTitle.split('/');
  const title = titleArr[1].charAt().toUpperCase() + titleArr[1].slice(1);
  console.log(title);
  return (
    <>
      <NextSeo
        title={title || undefined}
        titleTemplate="Capture | %s"
        description="Capture project es una página web donde mostramos nuestra compañía, servicios que ofrecemos y nuestros casos de éxito"
      />
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
