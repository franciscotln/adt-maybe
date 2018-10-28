const test = require('tape');
const map = require('../../../Maybe/operators/map');

test('maps and returns a Just(value) if the input is a Just(v), returns Nothing() otherwise', (t) => {
  const Just2 = () => 2;
  const Nothing = () => null;

  t.equals(3, map(x => x + 1)(Just2)());
  t.equals(undefined, map(x => x + 1)(Nothing)());
  t.end();
});
