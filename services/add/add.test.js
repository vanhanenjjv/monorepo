const add = require('./add')

test('one plus two should be three', () => {
  expect(add(1, 2)).toEqual(3)
})
