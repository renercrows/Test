const stringLength = require('./task1.js');
test('length > 1', () => {
  expect(stringLength('Max')).toBe(3);
});