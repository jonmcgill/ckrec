'use client'

import Link from 'next/link'
import { info } from '@/app/_info'

export default function Footer() {
  return (
    <footer>
      <section className="edge-wrap has-links">
        <div className="top">
          <div className="col">
            <div className="col-line" />
            <span className="col-heading">
              Location
            </span>
            <ul className="clear">
              <li>
                <a href={info.mapLink} target="_blank">
                  925 N Main Street<br />
                  Dayton, OH 45405
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="col-line" />
            <span className="col-heading">
              Contact
            </span>
            <ul className="clear">
              <li>
                <span>Phone: </span>
                <a href={`tel:${info.contact.phone}`}>
                  {info.contact.phone}
                </a>
              </li>
              <li>
                <span>Fax: {info.contact.fax}</span>
              </li>
              <li>
                <span>Email: </span>
                <a href={`mailto:${info.contact.email}`}>
                  {info.contact.email}
                </a>
              </li>
              <li>
                <a href={info.contact.facebook} target="_blank">
                  Connect with us on Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="col-line" />
            <span className="col-heading">
              Links
            </span>
            <ul className="clear">
              <li>
                <Link href="/#Services">Service Times</Link>
              </li>
              <li>
                <Link href="/clergy-and-staff">Clergy & Staff</Link>
              </li>
              <li>
                <Link href="/sunday-school">Sunday School</Link>
              </li>
              <li>
                <Link href="/children-and-worship">Children & Worship</Link>
              </li>
              <li>
                <Link href="/sunday-schedules">Sunday Schedules</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="tag">&copy; {info.year}, Christ the King Anglican Church</p>
      </section>
    </footer>
  )
}