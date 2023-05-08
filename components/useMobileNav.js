import { useState, useEffect } from 'react';

const useMobileNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (!isNavOpen) {
      document.getElementById('navbar-default').classList.add('hidden');
    } else {
      document.getElementById('navbar-default').classList.remove('hidden');
    }
  }, [isNavOpen]);

  return { isNavOpen, handleNavToggle };
};

export default useMobileNav;
