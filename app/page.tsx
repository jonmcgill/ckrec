import './cssHome.css'
import { Logo } from './_components/Logo'
import { EventBlocks } from './_components/EventBlock'
import { info } from './_info'

export default function Home() {
  return (
    <>
      <header className="home-header">
        <div className="home-hero">
          <div className="inner">
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
            <span className="cross text-light text-shadow" id="Services">
              ♱
            </span>
          </div>
        </div>
      </header>
      <main>
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
