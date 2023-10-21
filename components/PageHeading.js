import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import LineBreak from './LineBreak';
import Navigation from './Navigation';
import { fonts } from '../shared/styles';
import { content } from '../content/content'
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
      {/* <Navigation open={open} toggleOpen={toggleNav} /> */}
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
          <h1 className="text-shad-2">
            <span>{content.Home.titleTop}</span>
            <span>{content.Home.titleBottom}</span>
          </h1>
        )}
        {!isHome && (
          <h1>{title}</h1>
        )}
        <LineBreak color={util.theme().accent} />
        {isHome && <p className="text-shad-1">{content.Home.mission}</p>}
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
          background: ${util.theme().bgTitle};
          width: 100%;
          margin-top: 0;
          transition: margin-top 200ms ease-in-out;
          z-index: 3;
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
          padding: 0;
          margin-top: 20px;
          width: 46px;
          height: 46px;
          background: transparent;
          z-index: 1;

        }

        button span {
          display: block;
          height: 2px;
          background: ${util.theme().text};
          position: relative;
          margin: 18px auto;
          width: 26px;
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
          bottom: -6px;
        }

        button span:before {
          top: -8px;
        }

        .subpage-logo {
          text-align: center;
        }

        @media screen and (min-width: 800px) {
          header {
            padding-top: ${isHome ? '16vh' : '8vh'};
          }

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