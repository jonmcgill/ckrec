'use client'

import { isDateBetween, getCalendar } from './utilClient'

export type EventItem = {
  day: string
  events: string[][]
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
      ['Sunday School (All Ages)', '9:00 AM'],
      ['Holy Communion', '10:00 AM']
    ],
  } as EventItem,
  WednesdayWeekly: {
    day: 'Wednesday',
    events: [
      ['Morning Prayer', '6:30 AM'],
      ['Evening Prayer', '7:00 PM']
    ]
  } as EventItem,
  FridayWeekly: {
    day: 'Friday',
    events: [
      ['Morning Prayer', '6:30 AM'],
    ]
  } as EventItem,
  AdventGreening: {
    day: 'Sunday',
    date: 'December 8, 2024',
    events: [
      ['Greening of the Church', '4:00 PM'],
      ['Chili Cook-Off', '6:00 PM'],
    ]
  } as EventItem,
  AdventCaroling: {
    day: 'Sunday',
    date: 'December 21, 2024',
    events: [
      ['Caroling at Brookdale', '6:00 PM'],
    ]
  } as EventItem,
  AdventCaroling2: {
    day: 'Saturday',
    date: 'December 20, 2024',
    events: [
      ['St Lazarus Caroling', '6:00 PM'],
    ]
  } as EventItem,
  AdventLessonsAndCarols: {
    day: 'Tuesday',
    date: 'December 24, 2024',
    events: [
      ['Christmas Eve Lessons & Carols', '6:30 PM']
    ]
  } as EventItem,
  ChristmasMorning: {
    day: 'Wednesday',
    date: 'December 25, 2024',
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
  HolyWeekPalmSunday: {
    day: 'Sunday',
    date: 'April 13, 2025',
    events: [
      ['Palm Sunday Holy Communion', '10:00AM']
    ]
  } as EventItem,
  HolyWeekGeneral: {
    day: 'Monday, Tuesday, Wednesday',
    date: 'April 14-16, 2025',
    events: [
      ['Holy Communion Service', '12:00PM']
    ]
  } as EventItem,
  HolyWeekMeagerMeal: {
    day: 'Wednesday',
    date: 'April 16, 2025',
    events: [
      ['Last Meager Meal', '6:00PM'],
      ['Evening Prayer', '7:00PM'],
    ]
  } as EventItem,
  HolyWeekMaundyThursday: {
    day: 'Thursday',
    date: 'April 17, 2025',
    events: [
      ['Supper of the Lamb', '6:00PM'],
      ['Maundy Thursday Service', '7:00PM'],
    ]
  } as EventItem,
  HolyWeekGoodFriday: {
    day: 'Friday',
    date: 'April 18, 2025',
    events: [
      ['Stations of the Cross', '11:00AM'],
      ['Seven Last Words', '12:00PM'],
      ['Good Friday Tenebrae', '8:15PM'],
    ]
  } as EventItem,
  HolyWeekHolySaturday: {
    day: 'Saturday',
    date: 'April 19, 2025',
    events: [
      ['Easter Vigil and Celebration', '8:15PM'],
    ]
  } as EventItem,
  EasterSunday: {
    day: 'Sunday',
    date: 'April 20, 2025',
    events: [
      ['Easter Sunday Holy Communion', '10:00AM'],
      ['No Sunday School']
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
    events.WednesdayWeekly,
    events.FridayWeekly,
  ],
}

const adventEvents: EventBlock = {
  title: 'Advent Events and Services',
  show: calendar.season.name === 'Advent',
  items: [
    events.AdventGreening,
    events.AdventCaroling2,
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
  show: isDateBetween('3/21/2025', '4/21/2025'),
  items: [
    events.HolyWeekPalmSunday,
    events.HolyWeekGeneral,
    events.HolyWeekMeagerMeal,
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
