export const themes = {
  blue: {
    bgNav: 'rgba(0,2,40, 0.98)',
    bgTitle: 'rgba(0,8,51, 0.7)',
    bgFooter: 'rgba(0,8,51, 0.97)',
    text: 'white',
    accent: '#B8860B', // gold
  },
  green: {
    bgNav: 'rgba(10, 20, 15, 0.98)',
    bgTitle: 'rgba(10, 40, 25, 0.7)',
    bgFooter: 'rgba(10, 30, 20, 0.97)',
    text: 'white',
    accent: '#B8860B', // gold
  },
  purple: {
    bgNav: 'rgba(5, 0, 20, 0.98)',
    bgTitle: 'rgba(20, 5, 45, 0.65)',
    bgFooter: 'rgba(25, 10, 50, 0.97)',
    text: 'white',
    accent: '#B8860B', // gold
  },
  white: {
    bgNav: 'rgba(255,255,255,0.97)',
    bgTitle: 'rgba(255,255,255, 0.75)',
    bgFooter: 'rgba(240,240,245,0.97)',
    text: '#22334a',
    copy: '#22334a',
    accent: '#B8860B', // gold
  },
}

export const seasons = {
  Advent: {
    theme: themes.blue,
    bg: {
      sm: '/img/bg-sm-advent.jpg',
      lg: '/img/bg-lg-advent.jpg',
    }
  },
  Christmas: {
    theme: themes.white,
    bg: {
      sm: '',
      lg: '',
    }
  },
  Epiphany: {
    theme: themes.white,
    bg: {
      sm: '',
      lg: '',
    }
  },
  Gesimatide: {
    theme: themes.purple,
    bg: {
      sm: '',
      lg: '',
    }
  },
  Lent: {
    theme: themes.purple,
    bg: {
      sm: '/img/bg-sm-lent.jpg',
      lg: '/img/bg-lg-lent.jpg',
    }
  },
  Easter: {
    theme: themes.white,
    bg: {
      sm: '/img/bg-sm-easter.jpg',
      lg: '/img/bg-lg-easter.jpg',
    }
  },
  Trinity: {
    theme: themes.green,
    bg: {
      sm: '/img/bg-sm-trinity.jpg',
      lg: '/img/bg-lg-trinity.jpg',
    }
  },
}