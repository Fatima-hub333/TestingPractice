const stringLength = require('./stringLength.js');

test('The parameter is not a string', () => {
    //Arrange
    const expected = /^Alic/;

    //Act & Assert
    expect.not.stringLength(expected);
});

test('The parameter is empty.', () => {
    expect(stringLength(' ')).toBeLessThan(1);
});

test('The string is too long. (Max:10 characters)', () => {
    const string = 'ThisIsABigString';

    expect(stringLength(string)).toBeGreaterThan(10);
})