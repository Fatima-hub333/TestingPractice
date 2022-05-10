const reverseString = require('./Task2.js');

test('The parameter is not string', () => {
  //Arrange
  const expected = /^Alic/;

  //Act & Assert
  expected.not.stringMatching(expected);
});

test('The return length does not match with the input length', () => {
const string = 'This is length test';

expect(stringLength(string)).toEqual(stringLength(reverseString(string)));
});

test('The string and its reverse does not have the same letters', () => {
const string = 'testing case';
string2 = reverseString(string);
if([...string].every(letter => string2.includes(letter)) && [...string2].every(letter => string.includes(letter))){ 
    console.log('It pass!');
}})