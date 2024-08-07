import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollY) {
      window.scrollTo(0, location.state.scrollY);
    }

    return () => {
      window.history.replaceState({ scrollY: window.scrollY }, '');
    };
  }, [location]);
};

export default useScrollRestoration;
