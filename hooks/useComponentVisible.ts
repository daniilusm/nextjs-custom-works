import { useState, useEffect, useRef } from 'react';

export default initialIsVisible => {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const ref = useRef(null);

  const handleClickOutside = e => {
    if (ref.current && !e.composedPath().includes(ref.current)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
};
