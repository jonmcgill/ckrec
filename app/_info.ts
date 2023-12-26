import { isDateBetween, getCalendar } from './utilClient'

export type EventItem = {
  day: string
  events: [string, string][]
  date?: string
  show?: boolean
}

export type EventBlock = {
  show: boolean
  title: string
  items: EventItem[]
}

const events  = {
  SundayWeekly: {
    day: 'Sunday',
    events: [
      ['Children\'s Sunday School', '9:00 AM'],
      ['Holy Communion', '10:00 AM']
    ],
  } as EventItem,
  WednesdayWeekly: {
    day: 'Wednesday',
    events: [
      ['Evening Prayer', '7:00 PM']
    ]
  } as EventItem,
  AdventGreening: {
    day: 'Sunday',
    date: 'December 10, 2023',
    events: [
      ['Greening of the Church', '4:00 PM'],
      ['Chili Cook-Off', '6:00 PM'],
    ]
  } as EventItem,
  AdventCaroling: {
    day: 'Friday',
    date: 'December 15, 2023',
    events: [
      ['NLS Neighborhood Caroling', '6:00 PM'],
    ]
  } as EventItem,
  AdventLessonsAndCarols: {
    day: 'Sunday',
    date: 'December 24, 2023',
    events: [
      ['Christmas Eve Lessons & Carols', '6:30 PM']
    ]
  } as EventItem,
  ChristmasMorning: {
    day: 'Monday',
    date: 'December 25, 2023',
    events: [
      ['Christmas Morning Service', '9:00 AM']
    ]
  } as EventItem,
  LentShroveTuesday: {
    day: 'Tuesday',
    date: 'March 1, 2022',
    events: [
      ['Shrove Tuesday Pancake Dinner', '5:30 PM']
    ]
  } as EventItem,
  LentAshWednesday: {
    day: 'Wednesday',
    date: 'March 2, 2022',
    events: [
      ['Ash Wednesday (Morning Service)', '7:00 AM'],
      ['Ash Wednesday (Evening Service)', '7:00 PM'],
    ]
  } as EventItem,
  HolyWeekGeneral: {
    day: 'Monday, Tuesday, Wednesday',
    date: 'April 3-5, 2023',
    events: [
      ['Holy Week Service', '12:00PM']
    ]
  } as EventItem,
  HolyWeekMaundyThursday: {
    day: 'Thursday',
    date: 'April 6, 2023',
    events: [
      ['Supper of the Lamb', '6:00PM'],
      ['Maundy Thursday Service', '7:00PM'],
    ]
  } as EventItem,
  HolyWeekGoodFriday: {
    day: 'Friday',
    date: 'April 7, 2023',
    events: [
      ['Stations of the Cross', '11:00AM'],
      ['Seven Last Words', '12:00PM'],
      ['Showing of "The Passion of the Christ"', '3:00PM'],
      ['Tenebrae', '8:00PM'],
    ]
  } as EventItem,
  HolyWeekHolySaturday: {
    day: 'Saturday',
    date: 'April 8, 2023',
    events: [
      ['Easter Vigil and Celebration', '8:15PM'],
    ]
  } as EventItem,
  EasterSunday: {
    day: 'Sunday',
    date: 'April 9, 2023',
    events: [
      ['Easter Sunday Holy Communion', '10:00AM'],
    ]
  } as EventItem
}

const year = new Date().getFullYear()
const calendar = getCalendar(year)

const standardEvents: EventBlock = {
  title: 'Weekly Services',
  show: true,
  items: [
    events.SundayWeekly,
    events.WednesdayWeekly
  ],
}

const adventEvents: EventBlock = {
  title: 'Advent Events and Services',
  show: calendar.season.name === 'Advent',
  items: [
    events.AdventGreening,
    events.AdventCaroling,
    events.AdventLessonsAndCarols,
    events.ChristmasMorning,
  ]
}

const christmasEvents: EventBlock = {
  title: 'Christmas Services',
  show: calendar.season.name === 'Christmas' && isDateBetween(`12/24/${year}`, `12/26/${year}`),
  items: [events.ChristmasMorning]
}

export const lentEvents: EventBlock = {
  title: 'Lenten Services',
  show: isDateBetween('2/20/2022', '3/3/2022'),
  items: [
    events.LentShroveTuesday,
    events.LentAshWednesday,
  ]
}

export const holyWeekEvents: EventBlock = {
  title: 'Holy Week Services',
  show: isDateBetween('3/17/2023', '4/10/2023'),
  items: [
    events.HolyWeekGeneral,
    events.HolyWeekMaundyThursday,
    events.HolyWeekGoodFriday,
    events.HolyWeekHolySaturday,
    events.EasterSunday,
  ]
}

export const info = {
  year,
  mapLink: 'https://www.google.com/maps/place/925+N+Main+St,+Dayton,+OH+45405',
  contact: {
    phone: '937-224-8556',
    fax: '937-224-4485',
    email: 'info@ctkdayton.org',
    facebook: 'https://www.facebook.com/ctkdayton',
    admin: 'parishadmin@ctkdayton.org',
  },
  ...calendar,
  events: [
    adventEvents,
    christmasEvents,
    lentEvents,
    holyWeekEvents,
    standardEvents,
  ],
}
