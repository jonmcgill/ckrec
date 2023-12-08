'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import debounce from 'lodash.debounce'
import { Logo } from './Logo'
import { cssClasses } from '../utilClient'
import './cssNav.css'

type NavWrapProps = {
  name: string
  links: string[][]
}

function NavWrap(props: NavWrapProps) {
  return (
    <div data-nav-wrap>
      <button data-nav-top className="text-shadow">
        {props.name}
      </button>
      <div data-nav-menu>
        <ul className="bg-prim">
          {props.links.map((l) => (
            <li key={l[0]}>
              <Link href={l[0]}>{l[1]}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const css = cssClasses({ scrolled, 'bg-prim': scrolled })

  useEffect(() => {
    setScrolled(window.scrollY > 50)

    const handleScroll = debounce(() => {
      setScrolled(window.scrollY > 50)
    }, 15)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={css}>
      <div className="nav-inner">
        <div className="nav-menu-items">
          <NavWrap
            name="Worship"
            links={[
              ['/#Services', 'Services'],
              ['/liturgy', 'Liturgical Worship'],
              ['/holy-communion', 'Holy Communion'],
              ['/children-and-worship', 'Children & Worship'],
            ]}
          />
          <NavWrap
            name="Ministry"
            links={[
              ['/sunday-school', 'Sunday School'],
              ['/outreach', 'Outreach'],
            ]}
          />
          <NavWrap
            name="Parish"
            links={[
              ['/clergy-and-staff', 'Clergy & Staff'],
              ['/rec', 'REC'],
            ]}
          />
        </div>
        {scrolled && (
          <Link href="/">
            <Logo />
          </Link>
        )}
      </div>
    </nav>
  )
}