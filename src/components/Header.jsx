import { useEffect, useState } from 'react';
import '../styles/components/header.scss';

export default function Header(props) {

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 150); // Defina o valor de scroll onde você quer que a navbar mude para sticky
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <span className="header__logo">Crypto Tracker</span>
      <nav className="header__navbar">
        <a href="#home" className="header__button">Home</a>
        <a href="#market" className="header__button">Market</a>
        <a href="#about" className="header__button">About</a>
      </nav>
    </header>
  )
}