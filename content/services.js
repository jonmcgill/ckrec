import util from '../shared/util'

// bump

export const SundayWeekly = {
  day: 'Sunday',
  events: [
    ['Children\'s Sunday School', '9:00 AM'],
    ['Holy Communion', '10:00 AM']
  ]
}

export const WednesdayWeekly = {
  day: 'Wednesday',
  events: [
    ['Evening Prayer', '7:00 PM']
  ]
}

export const LentenServices = {
  show: util.isBetween('2/20/2022', '3/3/2022'),
  title: 'Lenten Services',
  items: [
    {
      show: true,
      day: 'Tuesday',
      date: 'March 1, 2022',
      events: [
        ['Shrove Tuesday Pancake Dinner', '5:30 PM']
      ]
    },
    {
      show: true,
      day: 'Wednesday',
      date: 'March 2, 2022',
      events: [
        ['Ash Wednesday (Morning Service)', '7:00 AM'],
        ['Ash Wednesday (Evening Service)', '7:00 PM'],
      ]
    }
  ]
}

export const HolyWeekServices = {
  show: util.isBetween('3/17/2023', '4/10/2023'),
  title: 'Holy Week Services',
  items: [
    {
      show: true,
      day: 'Monday, Tuesday, Wednesday',
      date: 'April 3-5, 2023',
      events: [
        ['Holy Week Service', '12:00PM']
      ]
    },
    {
      show: true,
      day: 'Thursday',
      date: 'April 6, 2023',
      events: [
        ['Supper of the Lamb', '6:00PM'],
        ['Maundy Thursday Service', '7:00PM'],
      ]
    },
    {
      show: true,
      day: 'Friday',
      date: 'April 7, 2023',
      events: [
        ['Stations of the Cross', '11:00AM'],
        ['Seven Last Words', '12:00PM'],
        ['Showing of "The Passion of the Christ"', '3:00PM'],
        ['Tenebrae', '8:00PM'],
      ]
    },
    {
      show: true,
      day: 'Saturday',
      date: 'April 8, 2023',
      events: [
        ['Easter Vigil and Celebration', '8:15PM'],
      ]
    },
    {
      show: true,
      day: 'Sunday',
      date: 'April 9, 2023',
      events: [
        ['Easter Sunday Holy Communion', '10:00AM'],
      ]
    },
  ]
}

export const AdventEvents = {
  show: util.isBetween('12/05/2023', '12/26/2023'),
  title: 'Advent Events and Services',
  items: [
    {
      show: true,
      day: 'December 10, 2023',
      date: 'Sunday',
      events: [
        ['Greening of the Church', '4:00 PM'],
        ['Chili Cook-Off', '6:00 PM'],
      ]
    },
    {
      show: true,
      day: 'December 15, 2023',
      date: 'Friday',
      events: [
        ['NLS Neighborhood Caroling', '6:00 PM'],
      ]
    },
    {
      show: true,
      day: 'December 24, 2023',
      date: 'Sunday',
      events: [
        ['Christmas Eve Lessons & Carols', '6:30 PM']
      ]
    },
    {
      show: true,
      day: 'December 25, 2023',
      date: 'Monday',
      events: [
        ['Christmas Morning Service', '9:00 AM']
      ]
    },
  ]
}

export const ChristmasServices = {
  show: util.isBetween('12/18/2021', '12/26/2021'),
  title: 'Christmas Services',
  items: [
    {
      show: true,
      day: 'Friday',
      events: [
        ['Christmas Eve Lessons & Carols', '6:30 PM']
      ]
    },
    {
      show: true,
      day: 'Saturday',
      events: [
        ['Christmas Day Holy Communion', '9:00 AM']
      ]
    }
  ]
}

export const VirtualServices = `
  ## Virtual Services

  If you are unable to join us at the sanctuary, you can participate in a live stream
  of the service over [Zoom](https://zoom.us/download).

  1. Make sure you have the Zoom client installed on your device
  2. Request a meeting password from [parishadmin@ctkdayton.org](mailto:parishadmin@ctkdayton.org)
  3. On Sunday morning, [join the virtual service](https://us02web.zoom.us/j/83954661868)
`

export const zoomLink = 'https://ckrec.us10.list-manage.com/track/click?u=3ac737087baab366987bd82d2&id=2c9446273a&e=a177249b3e'
