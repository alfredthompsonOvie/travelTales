// ScrollRestoration.js
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollRestoration = () => {
  const { key } = useLocation();
  const scrollPositions = useRef(new Map());

  useEffect(() => {
    // Save the current scroll position
    scrollPositions.current.set(key, window.scrollY);

    const handlePopState = () => {
      const scrollPosition = scrollPositions.current.get(key);
      if (scrollPosition !== undefined) {
        window.scrollTo(0, scrollPosition);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [key]);

  return null;
};

export default ScrollRestoration;
