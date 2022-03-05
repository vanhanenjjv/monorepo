const subtract = require('./subtract')

test('five subtracted by three should be two', () => {
  expect(subtract(5, 3)).toEqual(2)
})
