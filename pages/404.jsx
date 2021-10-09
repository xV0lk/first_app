import { useRouter } from 'next/router';
import React from 'react';
import ErrorPage from '../components/ErrorPage';
import Navbar from '../components/Navbar';

const Custom404 = () => {
  const router = useRouter();
  const { asPath } = router;
  return (
    <>
      <Navbar />
      <ErrorPage path={asPath} />
    </>
  );
};

export default Custom404;
