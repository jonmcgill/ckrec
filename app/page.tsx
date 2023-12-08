import './cssHome.css'
import { Logo } from './_components/Logo'
import { EventBlocks } from './_components/EventBlock'
import { info } from './_info'

export default function Home() {
  return (
    <>
      <header className="home">
        <div className="header-bg" />
        <div className="header-overlay" />
        <div className="header-content">
          <div className="header-home">
            <Logo box shadow />
            <h1 className="prim text-light text-shadow">
              Christ the King
              <br />
              <span>Anglican Church</span>
            </h1>
            <div className="line" />
            <p className="serif text-light text-shadow italic">
              Dying with Christ. Living in Faith.
              <br />
              Seeking the Kingdom.
            </p>
            <span className="season text-shadow" id="Services">
              ♱ <span>{info.season}, {info.year}</span> ♱
            </span>
          </div>
        </div>
      </header>
      <main className="bg-content">
        <div className="home-content content-wrap-narrow has-links-dark">
          <EventBlocks />
          <h2 className="prim center">Virtual Services</h2>
          <div className="center">
            <div className="line" />
          </div>
        </div>
        <div className="home-content content-wrap-narrow has-links-dark">
          <p>
            If you are unable to join us at the sanctuary, you can participate in
            a live stream of the service over <a href="https://zoom.us/download" target="_blank">Zoom</a>.
          </p>
          <ol>
            <li>
              Make sure you have the Zoom client installed on your device
            </li>
            <li>
              Request a password from <a href={`mailto:${info.contact.admin}`}>{info.contact.admin}</a>
            </li>
            <li>
              On Sunday morning, join the virtual service
            </li>
          </ol>
        </div>
      </main>
    </>
  )
}
