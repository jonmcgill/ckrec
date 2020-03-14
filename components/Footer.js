import { colors, fonts } from '../shared/styles';
import Space from '../components/Space';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <hr />
          <h4>Location</h4>
          <a
            href="https://www.google.com/maps/place/925+N+Main+St,+Dayton,+OH+45405"
            target="_blank"
          >
            925 N Main Street
            <br />
            Dayton, OH 45405
          </a>
          <Space y="40px" />
          <hr />
          <h4>Contact</h4>
          <ul>
            <li>
              Phone:
              {' '}
              <a href="tel:937-224-8555">937-224-8555</a>
            </li>
            <li>
              Fax: 937-224-4485
            </li>
            <li>
              Email:
              {' '}
              <a href="info@ckrec.org">info@ckrec.org</a>
            </li>
          </ul>
          <Space y="40px" />
          <hr />
          <h4>Links</h4>
          <ul className="links">
            <li>
              <a>Worship</a>
            </li>
            <li>
              <a>Ministries</a>
            </li>
            <li>
              <a>Leadership</a>
            </li>
            <li>
              <a>Sunday Schedules</a>
            </li>
          </ul>
          <copy>
            &copy; {year}, Christ the King Anglican Church
          </copy>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background: rgba(20, 45, 45, 0.97); // ${colors.darkGray};
          color: white;
          font-family: ${fonts.sans};
          line-height: 1.6;
          padding: 60px 30px;
          position: relative;
          z-index: 3;
        }

        footer > div {
          max-width: 600px;
          margin: 0 auto;
        }

        hr {
          width: 100px;
          border-top: 2px solid white;
          margin: 0px;
        }

        h4 {
          font-size: 18px;
          font-family: ${fonts.serif};
          color: white;
          margin: 16px 0px;
        }

        a {
          color: ${colors.amber};
          text-decoration: none;
        }

        .links a,
        .links li {
          padding: 5px 0px;
        }

        copy {
          display: block;
          margin-top: 60px;
          opacity: 0.6;
        }
      `}</style>
    </>
  )
}