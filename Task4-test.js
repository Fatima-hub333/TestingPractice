const stringCapitalized = require('./Task4.js');

describe('my Sting', () => {
  test('is lowercase', () => {
    const string = 'everything is lowercase';
    expect(stringCapitalized(string)).toBe('EveryThing is lowercase')
  });

  test('is uppercase', () => {
    const string = 'EVERYTHING IS UPPERCASE';
    expect(stringCapitalized(string)).toBe('Everything is uppercase')
  });
})