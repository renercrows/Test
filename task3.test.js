const calculate = require('./task3.js');

describe('calculate', () => {
  test('sum of two numbers', () => {
    expect(calculate.add(10, 5)).toEqual(15);
  });

  test('rest of two numbers', () => {
    expect(calculate.subtract(10, 5)).toEqual(5);
  });

  test('divition of two numbers', () => {
    expect(calculate.divide(10, 5)).toEqual(2);
  });

  test('multiply of two numbers', () => {
    expect(calculate.multiply(10, 5)).toEqual(50);
  });
});
