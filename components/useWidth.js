import { useEffect, useState } from 'react';

const useWidth = () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    if (isMobile) {
      setIsMobile(window.innerWidth < 1100 || true);
    } else {
      setIsMobile(window.innerWidth < 1100 || false);
    }
    const updateWidth = () => {
      if (isMobile) {
        setIsMobile(window.innerWidth < 1100 || true);
      } else {
        setIsMobile(window.innerWidth < 1100 || false);
      }
    };
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [isMobile]);

  return [isMobile];
};

export default useWidth;
