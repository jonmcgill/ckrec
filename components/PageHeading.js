import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import LineBreak from './LineBreak';
import Navigation from './Navigation';
import { fonts } from '../shared/styles';
import { home } from '../content/home';
import util from '../shared/util';

export default function PageHeading({ isHome, title }) {
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
      <Navigation open={open} toggleOpen={toggleNav} />
      <header className={open ? 'isOpen' : null}>
        {isHome && <Logo color={util.theme().accent} />}
        {!isHome && (
          <div className="subpage-logo">
            <Link href="/">
              <a>
                <Logo color={util.theme().accent} size="35px" sizeLg="60px" />
              </a>
            </Link>
          </div>
        )}
        {isHome && (
          <h1>
            <span>Christ the King</span>
            <span>Anglican Church</span>
          </h1>
        )}
        {!isHome && (
          <h1>{title}</h1>
        )}
        <LineBreak color={util.theme().accent} />
        {isHome && (
          <>
            <p>{home.mission}</p>
            <aside>{util.season()}, {util.year()}</aside>
          </>
        )}
        <button onClick={toggleNav}>
          <span />
        </button>
      </header>
      <style jsx>{`
        header {
          color: ${util.theme().text};
          height: ${isHome ? '100vh' : '50vh'};
          padding: 20px;
          padding-top: ${isHome ? '14vh' : '6vh'};
          position: relative;
          text-align: center;
          z-index: 3;
          background: ${util.theme().bgTitle};
          width: 100%;
          margin-top: 0;
          transition: margin-top 200ms ease-in-out;
        }

        h1 {
          font-family: ${fonts.serif};
          font-size: 28px;
          line-height: 1.1;
          padding: 30px 0 10px;
        }

        h1 span {
          display: block;
          margin: 0 5px;
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
          // position: absolute;
          padding: 0;
          margin-top: 20px;
          width: 40px;
          height: 40px;
          background: transparent;
          z-index: 1;
          // right: 30px;
          // top: 30px;

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

        .subpage-logo {
          text-align: center;
        }

        @media screen and (min-width: 800px) {
          h1 {
            font-size: 42px;
          }

          h1 span {
            display: inline-block;
            margin: 30px 5px 20px;
          }

          p, aside {
            max-width: 500px;
          }

          p {
            font-size: 18px;
            margin-top: 30px;
            line-height: 1.8;
          }

          aside {
            font-size: 22px;
            margin-top: 60px;
          }

          button {
            bottom: 40px;
          }
        }
      `}</style>
    </>
  )
}