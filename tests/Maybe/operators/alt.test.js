const test = require('tape');
const alt = require('../../../Maybe/operators/alt');

test('provides a Just(alternative value) case the input is a Nothing()', (t) => {
  const Nothing = () => null;
  const Just2 = () => 2;
  const Just3 = () => 3;

  t.equals(2, alt(Just2)(Nothing)());
  t.equals(3, alt(Just2)(Just3)());
  t.end();
});
