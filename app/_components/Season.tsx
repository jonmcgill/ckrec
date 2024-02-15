'use client'

import { getCalendar } from '../utilClient'

export default function Season() {
  const year = new Date().getFullYear()
  const calendar = getCalendar(year)

  return (
    <span>♱ <span>{calendar.season.name}, {year}</span> ♱</span>
  )
}