import React, { createContext, useContext, useState, useEffect } from 'react';

const MobileContext = createContext();

export const MobileProvider = ({ children, threshold = 768 }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkIsMobile() {
      setIsMobile(window.innerWidth < threshold);
    }

    window.addEventListener('resize', checkIsMobile);

 
    checkIsMobile();

    return () => window.removeEventListener('resize', checkIsMobile);
  }, [threshold]);

  return (
    <MobileContext.Provider value={isMobile}>
      {children}
    </MobileContext.Provider>
  );
};

export const useIsMobile = () => useContext(MobileContext);
