import Link from 'next/link';
import { fonts } from '../shared/styles';
import util from '../shared/util';
import config from '../shared/config';
import { content } from '../content/content'

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <div className="footer-container">
            <div className="footer-section">
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
            </div>
            <div className="footer-section">
              <hr />
              <h4>Contact</h4>
              <ul className="links">
                <li>
                  Phone:
                  {' '}
                  <a href={`tel:${content.Contact.phone}`}>
                    {content.Contact.phone}
                  </a>
                </li>
                <li>
                  Fax: {content.Contact.fax}
                </li>
                <li>
                  Email:
                  {' '}
                  <a href={`mailto:${content.Contact.email}`}>
                    {content.Contact.email}
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/ctkdayton/" target="__blank">
                    Connect with us on Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <hr />
              <h4>Links</h4>
              <ul className="links">
                <li>
                  <Link href="/#services">
                    <a>Service Times</a>
                  </Link>
                </li>
                <li>
                  <Link href="/clergy-and-staff">
                    <a>Clergy and Staff</a>
                  </Link>
                </li>
                <li>
                  <Link href="/children-and-worship">
                    <a>Children and Worship</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <span className="copyright">
            &copy; {util.year()}, Christ the King Anglican Church
          </span>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background: ${util.theme().bgFooter};
          color: ${util.theme().text};
          font-family: ${fonts.sans};
          line-height: 1.6;
          padding: 60px 30px;
          position: relative;
          z-index: 3;
        }

        footer > div {
          max-width: ${config.contentMaxWidth};
          margin: 0 auto;
        }

        .footer-section {
          margin-bottom: 40px;
        }

        hr {
          width: 100px;
          border-top: 2px solid ${util.theme().text};
          margin: 0px;
        }

        h4 {
          font-size: 18px;
          font-family: ${fonts.serif};
          color: ${util.theme().text};
          margin: 16px 0px;
        }

        a {
          color: ${util.theme().accent};
          text-decoration: none;
        }

        .links a,
        .links li {
          padding: 5px 0px;
        }

        .copyright {
          display: block;
          margin-top: 60px;
          opacity: 0.6;
        }

        @media screen and (min-width: 800px) {
          .footer-container {
            display: flex;
            justify-content: space-between;
          }

          h4 {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  )
}
