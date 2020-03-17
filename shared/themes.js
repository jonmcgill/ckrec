export const themes = {
  blue: {
  },
  green: {
    bgNav: 'rgba(10, 20, 15, 0.98)',
    bgTitle: 'rgba(10, 40, 25, 0.8)',
    bgFooter: 'rgba(10, 30, 20, 0.97)',
    text: 'white',
    accent: '#df8b00', // amber
  },
  purple: {
    bgNav: 'rgba(5, 0, 20, 0.98)',
    bgTitle: 'rgba(20, 5, 45, 0.8)',
    bgFooter: 'rgba(25, 10, 50, 0.97)',
    text: 'white',
    accent: '#e55353', // rose
  },
  white: {
  },
}

export const seasons = {
  Advent: {
    theme: themes.blue,
    bg: {
      sm: '',
      lg: '',
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
      sm: '',
      lg: '',
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