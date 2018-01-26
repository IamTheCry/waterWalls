const waterWalls = require('./waterWalls');

test('Given empty array waterWalls returns empty array', () => {
  expect(waterWalls([])).toBe([])
});