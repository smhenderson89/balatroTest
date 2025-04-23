const faceCardValue = require("../modules/faceCardValue")

test('J = 10', () => {
    expect(faceCardValue("J")).toBe(10);
  });

  test('Q = 10', () => {
    expect(faceCardValue("Q")).toBe(10);
  });

  test('K = 10', () => {
    expect(faceCardValue("K")).toBe(10);
  });

  test('A = 11', () => {
    expect(faceCardValue("A")).toBe(11);
  });

  test('8 = false', () => {
    expect(faceCardValue(8)).toBe(false);
  });