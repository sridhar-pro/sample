import {Sora} from '@next/font/google'

const sora =Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800' ],
});

import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import TopLeftImg from './TopLeftImg';
import Nav from './Nav';
import Header from './Header';
import About from '../pages/about'; // Import the About page

const Layout = ({ children }) => {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      const shouldShowAbout = window.scrollY > scrollThreshold;
      setShowAbout(shouldShowAbout);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <><div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
    </>
  );
};

export default Layout;
