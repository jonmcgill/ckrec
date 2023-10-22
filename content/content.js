import * as Services from './services'

export const content = {
  BackgroundImg: {
    desktop: '/img/bg-lg-altar.jpg',
    mobile: '/img/bg-lg-altar.jpg',
  },
  Home: {
    titleTop: 'Christ the King',
    titleBottom: 'Anglican Church',
    mission: `
      Preserving, teaching, and living the historic Christian faith
      in communion with other branches of Christ's Church to advance
      His Kingdom in all the earth.
    `,
    contentImage: '/img/ctk-table.jpg'
  },
  Contact: {
    phone: '937-224-8556',
    fax: '937-224-4485',
    email: 'info@ctkdayton.org',
  },
  WeeklyServices: [
    Services.SundayWeekly,
    Services.WednesdayWeekly,
  ],
  SpecialServices: [
    Services.AdventEvents,
    Services.ChristmasServices,
    Services.LentenServices,
    Services.HolyWeekServices,
  ]
}