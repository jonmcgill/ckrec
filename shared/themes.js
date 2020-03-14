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
    bgTitle: 'rgba(20, 5, 45, 0.85)',
    bgFooter: 'rgba(25, 10, 50, 0.97)',
    text: 'white',
    accent: '#e55353', // rose
  },
  white: {
  },
}

// TODO: should move to public and should have mobile versions
export const backgroundImages = {
  Lent: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Temptations_of_Christ_%28San_Marco%29.jpg',
  Trinity: 'https://enacademic.com/pictures/enwiki/70/Florentinischer_Meister_um_1300_001.jpg'
}

export const seasons = {
  Advent: themes.blue,
  Christmas: themes.white,
  Epiphany: themes.white,
  Lent: themes.purple,
  Easter: themes.white,
  Trinity: themes.green,
}