import Link from 'next/link';
import Logo from './Logo';
import LineBreak from './LineBreak';
import { fonts } from '../shared/styles';
import { content } from '../content/content'
import util from '../shared/util';

export default function PageHeading({ isHome, title }) {
  return (
    <>
      <header>
        {isHome && (<Logo size="60px" sizeLg="60px" color={util.theme().accent} />)}
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
          <h1 className="text-shad-2">{title}</h1>
        )}
        <LineBreak color={util.theme().accent} />
        {isHome && <p className="text-shad-1">{content.Home.mission}</p>}
      </header>
      <style jsx>{`
        header {
          color: ${util.theme().text};
          padding-top: 56px;
          position: relative;
          text-align: center;
          background: ${util.theme().bgTitle};
          width: 100%;
          z-index: 3;
          padding-bottom: 56px;
        }

        h1 {
          font-family: ${fonts.serif};
          font-size: 28px;
          line-height: 1.1;
          margin: 30px 0px;
        }

        h1 span {
          display: block;
          margin: 0 5px;
        }

        p, aside {
          margin: 20px auto 0;
          font-family: ${fonts.sans};
          text-align: center;
          max-width: 400px;
        }

        aside {
          color: ${util.theme().accent};
          font-family: ${fonts.serif};
          font-weight: bold;
          font-size: 20px;
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
          }

          p, aside {
            max-width: 500px;
          }

          p {
            font-size: 18px;
            margin-top: 30px;
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