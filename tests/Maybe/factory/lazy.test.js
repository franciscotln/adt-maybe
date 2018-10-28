const test = require('tape');
const lazy = require('../../../Maybe/factory/lazy');

test('returns a Just(value) or a Nothing()', (t) => {
  let value;
  const lazyMaybe = lazy(() => value);
  value = 'abc';
  t.equals(lazyMaybe(), 'abc');
  t.equals(lazy(() => 1)(), 1);
  t.end();
});

test('throws an error if lazy is called with an argument that is not a function', (t) => {
  t.throws(() => lazy(1)());
  t.end();
});
