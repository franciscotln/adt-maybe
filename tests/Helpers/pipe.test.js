const test = require('tape');
const pipe = require('../../Helpers/pipe');

test('it should call functions from left to right with the given argument', (t) => {
  const add2 = a => a + 2;
  const multiplyBy3 = a => a * 3;
  const input = 5;

  t.equals(21, pipe(add2, multiplyBy3)(input));
  t.equals(7, pipe(add2)(input));
  t.equals(5, pipe()(input));
  t.end();
});
