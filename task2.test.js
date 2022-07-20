const reverseString = require('./task2.js');

test('check for reverse string', () => {
  expect(reverseString('abcd')).toEqual('dcba');
});
