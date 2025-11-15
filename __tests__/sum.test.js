const { sum } = require('../src/index');

test('adds 2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('returns 0 if a or b is null', () => {
  expect(sum(null, 3)).toBe(0);
  expect(sum(2, null)).toBe(0);
});
