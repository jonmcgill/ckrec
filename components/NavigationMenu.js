import Link from 'next/link';
import { useState } from 'react';
import util from '../shared/util';
import { fonts } from '../shared/styles';
import HamburgerButton from './HamburgerButton';
import MobileNavigation from './MobileNavigation';

export default function NavigationMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    if (mobileMenuOpen) {
      document.body.classList.remove('isNavOpen');
      setMobileMenuOpen(false);
    } else {
      document.body.classList.add('isNavOpen');
      setMobileMenuOpen(true);
    }
  }

  return (
    <>
      <MobileNavigation open={mobileMenuOpen} toggleOpen={toggleMobileMenu}/>
      <div className="desktop-menu">
        <ul>
          <li>Worship
            <ul>
              <li><Link href="/liturgy"><a>Liturgy</a></Link></li>
              <li><Link href="/children-and-worship"><a>Children</a></Link></li>
              <li><Link href="/holy-communion"><a>Holy Communion</a></Link></li>
            </ul>
          </li>
          <span className="divider"/>
          <li>Ministry
            <ul>
              <li><Link href="sunday-school"><a>Sunday school</a></Link></li>
              <li><Link href="#"><a>Outreach</a></Link></li>{/* TODO add this page */}
            </ul>
          </li>
          <span className="divider" />
          <li>Leadership
            <ul>
              <li><Link href="clergy-and-staff"><a>Staff</a></Link></li>
              <li><Link href="rec"><a>REC</a></Link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="mobile-menu">
        <HamburgerButton onClick={toggleMobileMenu} />
      </div>
      <style jsx>{`
        .desktop-menu {
          display: flex;
          height: 100%;
          align-items: center;
        }
        
        .desktop-menu a {
          display: inline-block;
          text-decoration: none;
          color: ${util.theme().text};
          width: 100%;
          padding: 8px;
        }

        .desktop-menu > ul {
          display: flex;
          align-items: center;
        }

        .desktop-menu ul li  {
          display: inline-block;
          color: ${util.theme().text};
          position: relative;
          padding: 0px 24px;
          font-family: ${fonts.serif};
          font-size: 12pt;
          cursor: pointer;
          height: 100%;
          line-height: 56px;
          margin-bottom: 0;
        }
        
        .desktop-menu ul li ul {
          visibility: hidden;
          position: absolute;
          left: 0;
          z-index: 9999;
          width: 200px;
          background: rgba(10, 40, 25);
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }

        .desktop-menu ul li:last-of-type ul {
          left: unset;
          right: 0;
        }
        
        .desktop-menu ul li ul li {
          display: block;
          border: none;
          margin: 0;
          padding: 0;
          height: unset;
          line-height: unset;
        }

        .desktop-menu li:hover {
          background: rgba(0, 0, 0, 0.25);
        }

        .desktop-menu ul li:hover > ul {
          visibility: visible;
        }

        .desktop-menu ul li ul li:hover {
          background: rgba(0, 0, 0, 0.25);
        }

        .desktop-menu .divider {
          display: inline-block;
          width: 2px;
          height: 16px;
          background: ${util.theme().accent};
        }

        h3 {
          padding: 8px;
          color: ${util.theme().text};
          font-family: ${fonts.sans}
        }

        .mobile-menu {
          display: none;
        }

        @media screen and (max-width: 800px) {
          .desktop-menu {
            display: none;
          }

          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </>
  )
}