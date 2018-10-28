const test = require('tape');
const safe = require('../../../Maybe/safe/safe');

test('returns a Just(value) if the predicate is satisfied, Nothing() otherwise', (t) => {
  const safeGt5 = safe(x => x > 5);
  t.equals(6, safeGt5(6)());
  t.equals(undefined, safeGt5(5)());
  t.end();
});
