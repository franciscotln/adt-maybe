const test = require('tape');
const ap = require('../../../Maybe/operators/ap');

test('applies a Just(function) to a Just(value) and returns Just(new value) or Nothing()', (t) => {
  const inc = x => x + 1;
  const JustInc = () => inc;
  const Just2 = () => 2;
  const Nothing = () => null;

  t.equals(3, ap(Just2)(JustInc)());
  t.equals(undefined, ap(Nothing)(JustInc)());
  t.equals(undefined, ap(Just2)(Nothing)());
  t.equals(undefined, ap(Nothing)(Nothing)());
  t.end();
});
