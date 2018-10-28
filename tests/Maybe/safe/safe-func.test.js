const test = require('tape');
const safeFunc = require('../../../Maybe/safe/safe-func');

test('returns a Just(function) if a function is passed as argument, Nothing() otherwise', (t) => {
  t.equals(1, safeFunc(() => 1)()());
  t.equals(undefined, safeFunc([])());
  t.end();
});
