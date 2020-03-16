import { useRouter } from 'next/router';
import { fonts } from '../shared/styles';
import util from '../shared/util';
import config from '../shared/config';

export default function Navigation({ open, toggleOpen }) {
  const router = useRouter();

  function navigate(href) {
    return (e) => {
      e.preventDefault();
      toggleOpen();
      router.push(href);
    }
  }
  return (
    <>
      <nav className={open ? 'isOpen' : null}>
        <div>
          <h4>Worship</h4>
          <ul>
            <li>
              <a href="/#services" onClick={navigate('/#services')}>
                Service Times
              </a>
            </li>
            <li>
              <a href="/liturgy" onClick={navigate('/liturgy')}>
                Liturgical Worship
              </a>
            </li>
            <li>
              <a href="/children-and-worship" onClick={navigate('/children-and-worship')}>
                Children and Worship
              </a>
            </li>
            <li>
              <a href="/holy-communion" onClick={navigate('/holy-communion')}>
                Holy Communion: A Summary
              </a>
            </li>
          </ul>
          <h4>Ministries</h4>
          <ul>
            <li>
              <a href="/sunday-school" onClick={navigate('/sunday-school')}>
                Sunday School
              </a>
            </li>
            <li>
              <a href="/dominion-academy" onClick={navigate('/dominion-academy')}>
                Dominion Academy
              </a>
            </li>
            <li>
              <a href="/no-longer-strangers" onClick={navigate('/no-longer-strangers')}>
                No Longer Strangers
              </a>
            </li>
            <li>
              <a href="/st-lazarus" onClick={navigate('/st-lazarus')}>
                St. Lazarus Mission
              </a>
            </li>
          </ul>
          <h4>Leadership</h4>
          <ul>
            <li>
              <a>Clergy and Staff</a>
            </li>
            <li>
              <a>Reformed Episcopal Church</a>
            </li>
          </ul>
          <button onClick={toggleOpen}>
            &#10005;
          </button>
        </div>
      </nav>
      <style jsx>{`
        nav {
          background: ${util.theme().bgNav};
          height: 100vh;
          left: 0px;
          top: 0px;
          width: 100%;
          overflow: auto;
          position: fixed;
          padding: 40px;
          transform: translateY(-100%);
          transition: transform 200ms ease-in-out;
          z-index: 1;
        }

        nav.isOpen {
          transform: translateY(0px);
        }

        nav > div {
          max-width: ${config.contentMaxWidth};
          margin: 0 auto;
        }

        ul {
          margin: 8px auto 30px;
        }

        li a {
          color: ${util.theme().accent};
          font-family: ${fonts.sans};
          display: inline-block;
          line-height: 2;
          margin-left: 20px;
        }

        h4 {
          color: ${util.theme().text};
          font-family: ${fonts.serif};
          font-size: 20px;
        }

        button {
          appearance: none;
          padding: 0;
          border: 0;
          cursor: pointer;
          color: ${util.theme().text};
          background: transparent;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 28px;
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </>
  )
}
