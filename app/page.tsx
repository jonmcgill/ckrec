'use client'

import { Logo } from './_components/Logo'
import { EventBlocks } from './_components/EventBlock'
import Season from './_components/Season'
import '@/app/_css/cssHome.css'

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
            <span className="season text-accent text-shadow" id="Services">
              <Season />
            </span>
          </div>
        </div>
      </header>
      <main className="bg-content">
        <div className="home-content content-wrap-narrow has-links-dark">
          <p className="bold text-accent container small center">
            Sunday School is out for the summer and will start back up at the end of August.
          </p>
          <EventBlocks />
          <h2 className="prim center">Virtual Services</h2>
          <div className="center">
            <div className="line" />
          </div>
        </div>
        <div className="home-content content-wrap-narrow has-links-dark">
          <p>
            If you are unable to join us at the sanctuary, you can participate in
            a live stream of the service on <a href="https://www.youtube.com/@CtkAV/live" target="_blank">YouTube</a>.
          </p>
        </div>
      </main>
    </>
  )
}
