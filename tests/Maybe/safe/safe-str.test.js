const test = require('tape');
const safeStr = require('../../../Maybe/safe/safe-str');

test('returns Just(string) if the input is a string, Nothing() otherwise', (t) => {
  t.equals('Spock', safeStr('Spock')());
  t.equals(undefined, safeStr([])());
  t.equals(undefined, safeStr(1)());
  t.equals(undefined, safeStr(undefined)());
  t.end();
});
