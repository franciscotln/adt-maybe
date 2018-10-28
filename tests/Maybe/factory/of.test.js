const test = require('tape');
const of = require('../../../Maybe/factory/of');

test('returns a Just(value)', (t) => {
  t.equals(of(2)(),2);
  t.equals(of('')(), '');
  t.true(isNaN(of(NaN)()));
  t.end();
});

test('throws an error if the constructor is called without argument or with a nil value', (t) => {
  t.throws(() => of());
  t.throws(() => of(null));
  t.throws(() => of(undefined));
  t.end();
});
