import util from '../shared/util'

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
      day: 'Wednesday',
      date: 'March 2, 2022',
      events: [
        ['Ash Wednesday (Morning Service)', '7:00 AM'],
        ['Ash Wednesday (Evening Service)', '7:00 PM'],
      ]
    }
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
