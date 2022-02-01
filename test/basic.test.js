const calculator = require('../src/basic');

describe('Add', () => {
  var BVAData = [
    [1, 2, 3],
    [4, 5, 9],
    [3, 12, 15],
    [4, 6, 10],
  ];

  describe.each(BVAData)('BVA: add(%i, %i), Expected: %i', (a, b, expected) => {
    test(`returns ${calculator.add(a, b)}`, () => {
      expect(calculator.add(a, b)).toBe(expected);
    });
  });
});

describe('Add', () => {
  var DTData = [
    [0, 89, 89],
    [-17, -35, -52],
    [65, -12, 53],
    [-78, 24, -54],
  ];

  describe.each(DTData)('DT: add(%i, %i), Expected: %i', (a, b, expected) => {
    test(`returns ${calculator.add(a, b)}`, () => {
      expect(calculator.add(a, b)).toBe(expected);
    });
  });
});

describe('Substract', () => {
  var BVAData = [
    [1, 2, -1],
    [4, 5, -1],
    [3, 12, -9],
    [6, 6, 0],
  ];

  describe.each(BVAData)(
    'BVA: substract(%i, %i), Expected: %i',
    (a, b, expected) => {
      test(`returns ${calculator.substract(a, b)}`, () => {
        expect(calculator.substract(a, b)).toBe(expected);
      });
    }
  );
});

describe('Substract', () => {
  var DTData = [
    [0, 89, -89],
    [-17, -35, 18],
    [65, -12, 77],
    [-78, 24, -102],
  ];

  describe.each(DTData)('DT: add(%i, %i), Expected: %i', (a, b, expected) => {
    test(`returns ${calculator.substract(a, b)}`, () => {
      expect(calculator.substract(a, b)).toBe(expected);
    });
  });
});

describe('Multiply', () => {
  var BVAData = [
    [1, 2, 2],
    [4, 5, 20],
    [3, 12, 36],
    [6, 6, 36],
  ];

  describe.each(BVAData)(
    'BVA: multiply(%i, %i), Expected: %i',
    (a, b, expected) => {
      test(`returns ${calculator.multiply(a, b)}`, () => {
        expect(calculator.multiply(a, b)).toBe(expected);
      });
    }
  );
});

describe('Multiply', () => {
  var DTData = [
    [0, 89, 0],
    [-17, -35, 595],
    [65, -12, -780],
    [-78, 24, -1872],
  ];

  describe.each(DTData)(
    'DT: multiply(%i, %i), Expected: %i',
    (a, b, expected) => {
      test(`returns ${calculator.multiply(a, b)}`, () => {
        expect(calculator.multiply(a, b)).toBe(expected);
      });
    }
  );
});

describe('Divide', () => {
  var BVAData = [
    [1, 2, 0.5],
    [5, 5, 1],
    [12, 3, 4],
    [15, 4, 3.75],
    [2, 0, null],
  ];

  describe.each(BVAData)(
    'BVA: divide(%i, %i), Expected: %i',
    (a, b, expected) => {
      test(`returns ${calculator.divide(a, b)}`, () => {
        expect(calculator.divide(a, b)).toBe(expected);
      });
    }
  );
});

describe('Divide', () => {
  var DTData = [
    [0, 89, 0],
    [-17, -35, 0.4857142857142857],
    [65, 12, 5.416666666666667],
    [100, 25, 4],
  ];

  describe.each(DTData)(
    'DT: multiply(%i, %i), Expected: %i',
    (a, b, expected) => {
      test(`returns ${calculator.divide(a, b)}`, () => {
        expect(calculator.divide(a, b)).toBe(expected);
      });
    }
  );
});
