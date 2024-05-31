'use client';

import { useEffect } from 'react';

export const useBodyScrollLock = (shouldLock: boolean) => {
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(
      document.body
    ).overflow;
    if (shouldLock) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
      document.body.style.overflowX = 'hidden';
    }
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.overflowX = 'hidden';
    };
  }, [shouldLock]);
};
