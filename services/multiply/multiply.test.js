const multiply = require('./multiply')

test('three multiplied by three should be nine', () => {
  expect(multiply(3, 3)).toEqual(9)
})
