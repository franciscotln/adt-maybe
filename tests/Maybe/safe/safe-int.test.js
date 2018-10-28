const test = require('tape');
const safeInt = require('../../../Maybe/safe/safe-int');

test('returns a Just(int) if the input is an integer, Nothing() otherwise', (t) => {
  t.equals(1, safeInt(1)());
  t.equals(undefined, safeInt(1.5)());
  t.equals(undefined, safeInt('1')());
  t.equals(undefined, safeInt(NaN)());
  t.equals(undefined, safeInt(Infinity)());
  t.end();
});
