// src/data/countries.js

const countries = {
  poland: {
    aliases: ['pol', 'polska', 'poland'],
    name: 'Polska',
    medals: {
      gold: 75,
      silver: 91,
      bronze: 140,
    },
    summerGames: [
      { year: 2000, gold: 6, silver: 5, bronze: 3 },
      { year: 2004, gold: 3, silver: 2, bronze: 5 },
      { year: 2008, gold: 3, silver: 6, bronze: 1 },
      { year: 2012, gold: 2, silver: 2, bronze: 6 },
      { year: 2016, gold: 2, silver: 3, bronze: 6 },
      { year: 2020, gold: 4, silver: 5, bronze: 5 },
    ],
  },

  germany: {
    aliases: ['ger', 'niemcy', 'germany'],
    name: 'Niemcy',
    medals: {
      gold: 293,
      silver: 293,
      bronze: 306,
    },
    summerGames: [
      { year: 2000, gold: 13, silver: 17, bronze: 26 },
      { year: 2004, gold: 13, silver: 16, bronze: 20 },
      { year: 2008, gold: 16, silver: 10, bronze: 15 },
      { year: 2012, gold: 11, silver: 19, bronze: 14 },
      { year: 2016, gold: 17, silver: 10, bronze: 15 },
      { year: 2020, gold: 10, silver: 11, bronze: 16 },
    ],
  },

  france: {
    aliases: ['fra', 'france', 'francja'],
    name: 'Francja',
    medals: {
      gold: 264,
      silver: 293,
      bronze: 327,
    },
    summerGames: [
      { year: 2000, gold: 13, silver: 14, bronze: 11 },
      { year: 2004, gold: 11, silver: 9, bronze: 13 },
      { year: 2008, gold: 7, silver: 16, bronze: 17 },
      { year: 2012, gold: 11, silver: 11, bronze: 12 },
      { year: 2016, gold: 10, silver: 18, bronze: 14 },
      { year: 2020, gold: 10, silver: 12, bronze: 11 },
    ],
  },

  // Dodasz więcej, jak chcesz: italy, usa, china itd.
}

export default countries;
