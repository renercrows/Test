const capitalize = require('./task4.js');

test('capitalize the first letter of the string', () => {
  expect(capitalize('daniel')).toBe('Daniel');
});
