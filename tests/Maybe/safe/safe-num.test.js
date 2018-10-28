const test = require('tape');
const safeNum = require('../../../Maybe/safe/safe-num');

test('', (t) => {
  t.equals(1.5, safeNum(1.5)());
  t.equals(-1, safeNum(-1)());
  t.equals(undefined, safeNum('1.5')());
  t.equals(undefined, safeNum(NaN)());
  t.equals(undefined, safeNum(undefined)());
  t.end();
});
