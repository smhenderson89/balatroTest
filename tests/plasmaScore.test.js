const plasmaScore = require('../modules/plasmaSum')

test('plasmaScore 70 & 4 to equal 1369', () => {
    expect(plasmaScore(70, 4)).toBe(1369);
  });

  test('plasmaScore 100 & 10,000 to equal 25,502,500', () => {
    expect(plasmaScore(100, 10000)).toBe(25502500);
  });
