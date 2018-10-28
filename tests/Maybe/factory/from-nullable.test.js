const test = require('tape');
const fromNullable = require('../../../Maybe/factory/from-nullable');

test('returns a Just(value) or a Nothing()', (t) => {
  t.equals(fromNullable(1)(), 1);
  t.equals(fromNullable()(), undefined);
  t.equals(fromNullable(null)(), null);
  t.end();
});
