import util from '../shared/util';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function NavigationBar() {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowBackground(window.scrollY > 100);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <>
      <nav>
        <a className="home-link" href="/">
          <Logo color={util.theme().accent} size="35px" sizeLg="35px" />
        </a>
      </nav>
      <style jsx>{`
        nav {
          height: 56px;
          width: 100vw;
          background: ${showBackground ? util.theme().bgNavbar : 'rgba(0, 0, 0, 0)'};
          position: fixed;
          top: 0;
          z-index: 4;
          transition: background 0.1s linear;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        nav .home-link {
          padding-left: 8px;
          display: ${showBackground ? 'inline-block' : 'none'};
          transition: display 0.1s linear;
        }
      `}</style>
    </>
  )
}