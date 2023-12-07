'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import debounce from 'lodash.debounce'
import { Logo } from './Logo'
import { cssClasses } from '../utilClient'
import './cssNav.css'

type NavWrapProps = {
  name: string
  links: string[][]
}

function NavWrap(props: NavWrapProps) {
  const [open, setOpen] = useState(false)
  const wrap = useRef<HTMLDivElement>(null)

  const css = cssClasses({ open })

  function toggle() {
    setOpen((s) => !s)
  }

  useEffect(() => {
    const handleClick = (e: any) => {
      if (wrap.current) {
        if (open && !wrap.current.contains(e.target)) {
          setOpen(false)
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [open])

  return (
    <div data-nav-wrap onClick={toggle} className={css} ref={wrap}>
      <button data-nav-top className="text-shadow">
        {props.name}
      </button>
      <div data-nav-menu>
        <ul>
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
  const css = cssClasses({ scrolled })

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