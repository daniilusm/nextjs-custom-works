import React, { useCallback } from 'react';

export const useClickOutside = (
  ref: React.RefObject<any>,
  callback: () => void
) => {
  const handleClick = useCallback(
    e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    },
    [callback, ref]
  );

  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
