// i18n.js
const NextI18Next = require('next-i18next').default;
const path = require('path');

const nextI18Next = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['es'],
  localePath: path.resolve('./public/locales'),
});

module.exports = nextI18Next;
