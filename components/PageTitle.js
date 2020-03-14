import { useState } from 'react';
import Logo from './Logo';
import LineBreak from './LineBreak';
import { fonts } from '../shared/styles';
import { home } from '../content/home';
import util from '../shared/util';

export default function PageTitle() {
  const [open, setOpen] = useState(false);

  function toggleNav() {
    if (open) {
      document.body.classList.remove('isNavOpen');
      setOpen(false);
    } else {
      document.body.classList.add('isNavOpen');
      setOpen(true);
    }
  }

  return (
    <>
      <NavigationMenu open={open} toggleOpen={toggleNav} />
      <header className={open ? 'isOpen' : null}>
        <button onClick={toggleNav}>
          <span />
        </button>
        <Logo color={util.theme().accent} />
        <h1>
          <span>Christ the King</span>
          <span>Anglican Church</span>
        </h1>
        <LineBreak color={util.theme().accent} />
        <p>{home.mission}</p>
        <aside>{util.season()}, {util.year()}</aside>
      </header>
      <style jsx>{`
        header {
          color: ${util.theme().text};
          height: 100vh;
          padding: 20px;
          padding-top: 25vh;
          position: relative;
          text-align: center;
          z-index: 3;
          background: ${util.theme().bgTitle};
          width: 100%;
          margin-top: 0;
          transition: margin-top 200ms ease-in-out;
        }

        header.isOpen {
          margin-top: 100vh;
        }

        h1 {
          font-family: ${fonts.serif};
          line-height: 1.1;
          padding: 20px 0;
        }

        h1 span {
          display: block;
        }

        p, aside {
          margin: 20px auto 0;
          font-family: ${fonts.sans};
          line-height: 1.6;
          max-width: 400px;
        }

        aside {
          color: ${util.theme().accent};
          font-family: ${fonts.serif};
          font-weight: bold;
          font-size: 20px;
        }

        button {
          appearance: none;
          border: none;
          cursor: pointer;
          position: absolute;
          padding: 0;
          width: 40px;
          height: 40px;
          background: transparent;
          z-index: 1;
          left: 28px;
          top: 28px;
        }

        button span {
          display: block;
          height: 2px;
          background: ${util.theme().text};
          position: relative;
          margin: 18px auto;
          width: 20px;
        }

        button span:before,
        button span:after {
          content: "";
          display: block;
          position: relative;
          height: 2px;
          background: ${util.theme().text};
        }

        button span:after {
          bottom: -5px;
        }

        button span:before {
          top: -7px;
        }
      `}</style>
    </>
  )
}

function NavigationMenu({ open, toggleOpen }) {
  return (
    <>
      <nav className={open ? 'isOpen' : null}>
        <ul>
          <li>
            Worship
          </li>
          <li>
            Ministries
          </li>
          <li>
            Leadership
          </li>
        </ul>
        <button onClick={toggleOpen}>
          &#10005;
        </button>
      </nav>
      <style jsx>{`
        nav {
          background: ${util.theme().bgNav};
          height: 100vh;
          left: 0px;
          top: 0px;
          width: 100%;
          position: fixed;
          transform: translateY(-100%);
          transition: transform 200ms ease-in-out;
          z-index: 1;
        }

        nav.isOpen {
          transform: translateY(0px);
        }

        ul {
          padding: 40px;
          margin: 0 auto;
          max-width: 400px;
        }

        li {
          color: ${util.theme().text};
          font-family: ${fonts.serif};
          font-size: 32px;
          margin: 20px 0;
        }

        button {
          appearance: none;
          padding: 0;
          border: 0;
          cursor: pointer;
          color: ${util.theme().text};
          background: transparent;
          position: absolute;
          left: 40px;
          bottom: 40px;
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </>
  )
}