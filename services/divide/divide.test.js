const divide = require('./divide')

test('six divided by three should be two', () => {
  expect(divide(6, 3)).toEqual(2)
})
