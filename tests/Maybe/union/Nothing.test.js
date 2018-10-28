const test = require('tape');
const Nothing = require('../../../Maybe/union/Nothing');

test('returns a function that returns nothing', (t) => {
  t.equals(Nothing()(), undefined);
  t.equals(Nothing('a')(), undefined);
  t.end();
});
