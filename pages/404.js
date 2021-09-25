import { useRouter } from 'next/router';
import ErrorPage from '../components/ErrorPage';

const Custom404 = () => {
  const router = useRouter();
  const { asPath } = router;
  return <ErrorPage path={asPath} />;
};

export default Custom404;
