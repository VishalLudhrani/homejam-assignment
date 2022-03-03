import { useEffect, useState } from 'react';

interface windowSize {
  width: null | number,
  height: null | number,
}

const useBreakpoint = () => {
  const [breakpoint, setBreakPoint] = useState('');
  const [windowSize, setWindowSize] = useState<windowSize>({
    width: null,
    height: null,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    if (0 < windowSize.width! && windowSize.width! < 600) {
      setBreakPoint('xs');
    }
    if (600 < windowSize.width! && windowSize.width! < 960) {
      setBreakPoint('sm');
    }
    if (960 < windowSize.width! && windowSize.width! < 1280) {
      setBreakPoint('md');
    }
    if (1280 < windowSize.width! && windowSize.width! < 1920) {
      setBreakPoint('lg');
    }
    if (windowSize.width! >= 1920) {
      setBreakPoint('xl');
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize.width]);
  return breakpoint;
};

export default useBreakpoint;