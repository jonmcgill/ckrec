import sub from 'date-fns/sub'
import add from 'date-fns/add'
import format from 'date-fns/format'
import isBefore from 'date-fns/isBefore'

export function cssClasses(obj: Record<string, boolean | undefined | null>) {
  return Object.keys(obj).reduce((str, k) => {
    if (obj[k]) str += `${k} `
    return str
  }, '').replace(/ $/, '')
}

export function isDateBetween(start: string, end: string) {
  const n = Date.now()
  return n > new Date(start).getTime() && n < new Date(end).getTime()
}

// Thanks, ChatGPT...
export function getEaster(year: number) {
  const a = year % 19
  const b = Math.floor(year / 100)
  const c = year % 100
  const d = Math.floor(b / 4)
  const e = b % 4
  const f = Math.floor((b + 8) / 25)
  const g = Math.floor((b - f + 1) / 3)
  const h = (19 * a + b - d - g + 15) % 30
  const i = Math.floor(c / 4)
  const k = c % 4
  const l = (32 + 2 * e + 2 * i - h - k) % 7
  const m = Math.floor((a + 11 * h + 22 * l) / 451)
  const month = Math.floor((h + l - 7 * m + 114) / 31)
  const day = ((h + l - 7 * m + 114) % 31) + 1

  // Months in JavaScript are 0-indexed, so we subtract 1 from the month
  return new Date(year, month - 1, day)
}

export function simpleDate(date: Date) {
  return format(date, 'MM/dd/yy')
}

export function getCalendar(year: number) {
  const stAndrews = new Date(`11/30/${year}`)
  const stADay = stAndrews.getDay()
  const diff = stADay > 3 ? 7 - stADay : stADay * -1
  const advent = add(stAndrews, { days: diff })
  const christmas = new Date(`12/25/${year}`)
  const epiphany = add(new Date(`12/25/${year - 1}`), { days: 12 })
  const easter = getEaster(year)
  const holyWeek = sub(easter, { days: 6 })
  const lent = sub(easter, { days: 46 })
  const pentecost = add(easter, { days: 49 })
  const trinity = add(pentecost, { days: 7 })

  const seasons = [
    { name: 'Epiphany', date: epiphany, theme: 'White' },
    { name: 'Lent', date: lent, theme: 'Purple' },
    { name: 'Holy Week', date: holyWeek, theme: 'Dark' },
    { name: 'Easter', date: easter, theme: 'White' },
    { name: 'Pentecost', date: pentecost, theme: 'Red' },
    { name: 'Trinity', date: trinity, theme: 'Green' },
    { name: 'Advent', date: advent, theme: 'Blue' },
    { name: 'Christmas', date: christmas, theme: 'White' },
  ]

  let season = seasons[6]

  seasons.some((s, i) => {
    if (s.date) {
      if (isBefore(Date.now(), s.date)) {
        if (i === 0 ) {
          season = {
            name: 'Christmas',
            date: new Date(`12/25/${year - 1}`),
            theme: 'White',
          }
          return true
        } else if (i === seasons.length - 1) {
          season = seasons[i]
          return true
        } else {
          season = seasons[i - 1]
          return true
        }
      }
      return false
    }
  })

  return { seasons, season }
}
