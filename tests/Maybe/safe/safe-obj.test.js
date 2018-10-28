const test = require('tape');
const safeObj = require('../../../Maybe/safe/safe-obj');

test('returns a Just(object) if the input is an object, Nothing() otherwise', (t) => {
  t.same({ name: 'Spock' }, safeObj({ name: 'Spock' })());
  t.same({}, safeObj(Object.create(null))());
  t.equals(undefined, safeObj([])());
  t.equals(undefined, safeObj(undefined)());
  t.end();
});
