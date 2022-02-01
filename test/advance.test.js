const calculator = require('../src/advance');

describe('Pow', () => {
  var BVAData = [
    [1, 2, 1],
    [3, 0, 1],
    [3, 3, 27],
    [10, 2, 100],
  ];

  describe.each(BVAData)('BVA: Pow(%i, %i), Expected: %i', (a, b, expected) => {
    test(`returns ${calculator.Pow(a, b)}`, () => {
      expect(calculator.Pow(a, b)).toBe(expected);
    });
  });
});

describe('Modulo', () => {
  var DTData = [
    [1, 2, 1],
    [3, 2, 1],
    [3, 3, 0],
    [2, 10, 2],
  ];

  describe.each(DTData)(
    'DT: Modulo(%i, %i), Expected: %i',
    (a, b, expected) => {
      test(`returns ${calculator.Modulo(a, b)}`, () => {
        expect(calculator.Modulo(a, b)).toBe(expected);
      });
    }
  );
});

describe('GCD', () => {
  var BVAData = [
    [1, 2, 1],
    [3, 2, 1],
    [21, 33, 3],
    [10, 50, 10],
  ];

  describe.each(BVAData)('BVA: GCD(%i, %i), Expected: %i', (a, b, expected) => {
    test(`returns ${calculator.GCD(a, b)}`, () => {
      expect(calculator.GCD(a, b)).toBe(expected);
    });
  });
});

describe('GCD', () => {
  var DTData = [
    [18, 6, 6],
    [3, 2, 1],
    [3, 3, 3],
    [2, 10, 2],
    [331372211533137, 221172211533134, 1],
  ];

  describe.each(DTData)('DT: GCD(%i, %i), Expected: %i', (a, b, expected) => {
    test(`returns ${calculator.GCD(a, b)}`, () => {
      expect(calculator.GCD(a, b)).toBe(expected);
    });
  });
});
