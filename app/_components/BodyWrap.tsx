'use client'

import { getCalendar } from '../utilClient'

export default function BodyWrap(props: any) {
  const year = new Date().getFullYear()
  const calendar = getCalendar(year)

  return (
    <body className={calendar.season.theme}>
      {props.children}
    </body>
  )
}