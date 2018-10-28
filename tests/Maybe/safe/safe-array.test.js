const test = require('tape');
const safeArray = require('../../../Maybe/safe/safe-array');

test('returns a Just(array) if an array is passed as input, Nothing() otherwise', (t) => {
  t.same([1], safeArray([1])());
  t.same(undefined, safeArray('')());
  t.end();
});
