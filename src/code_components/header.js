import React, { useState, useEffect } from 'react';
import '../App.css'; // Adjust the path as needed
import App from '../App'; // Adjust the path as needed

function Header({onScroll}) {
  
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // Define styles based on `scrolled` state
  const style = {
    backgroundColor: scrolled ? 'rgba(94, 94, 94, 0.5)' : 'transparent',
    transitionDuration: '1.5s',
    borderBottom: scrolled ? '1px solid #515f61' : 'none',
  };
  useEffect(()=>{
    if (onScroll) {
      onScroll(style)
    }
  },[style,onScroll])
}
export default Header;